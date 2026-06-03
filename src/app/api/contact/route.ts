import { NextResponse } from "next/server";
import { Resend } from "resend";
import { emailTemplate } from "@/lib/email-template";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, telefono, email, mensaje } = body;

    if (!nombre?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    }

    // Limpiar API key: eliminar BOM (U+FEFF) y espacios que Windows puede agregar
    const rawKey = process.env.RESEND_API_KEY ?? "";
    const apiKey = rawKey.replace(/[﻿​\s]/g, "");

    // 1. Enviar email via Resend
    let emailOk = false;
    try {
      const resend = new Resend(apiKey);
      const { error: resendError } = await resend.emails.send({
        from: "10 Monos <onboarding@resend.dev>",
        to: ["digital.ntea@gmail.com"],
        replyTo: email,
        subject: `Nuevo contacto: ${nombre}${empresa ? ` · ${empresa}` : ""}`,
        html: emailTemplate({ nombre, empresa, telefono, email, mensaje }),
      });
      if (resendError) {
        console.error("Resend API error:", JSON.stringify(resendError));
      } else {
        emailOk = true;
      }
    } catch (emailError) {
      console.error("Resend exception:", emailError);
    }

    // 2. Guardar en Google Sheets
    const webhookUrl = (process.env.SHEETS_WEBHOOK_URL ?? "").replace(/[﻿​\s]/g, "");
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString("es-AR", {
              timeZone: "America/Argentina/Buenos_Aires",
            }),
            nombre,
            empresa: empresa || "",
            telefono: telefono || "",
            email,
            mensaje: mensaje || "",
          }),
        });
      } catch (sheetsError) {
        console.error("Sheets error:", sheetsError);
      }
    }

    if (!emailOk) {
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intentá de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error inesperado. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
