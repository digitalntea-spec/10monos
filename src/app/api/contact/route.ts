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

    // Limpiar BOM (U+FEFF) que Windows agrega al pasar variables por CLI
    const apiKey = (process.env.RESEND_API_KEY ?? "").replace(/^﻿/, "").trim();
    const resend = new Resend(apiKey);

    // 1. Enviar email via Resend
    const { error: resendError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "digital.ntea@gmail.com",
      subject: `Nuevo contacto: ${nombre}${empresa ? ` · ${empresa}` : ""}`,
      html: emailTemplate({ nombre, empresa, telefono, email, mensaje }),
    });

    if (resendError) {
      console.error("Resend error:", JSON.stringify(resendError));
      return NextResponse.json(
        { error: "No se pudo enviar el email. Intentá de nuevo." },
        { status: 500 }
      );
    }

    // 2. Guardar en Google Sheets
    const webhookUrl = (process.env.SHEETS_WEBHOOK_URL ?? "").replace(/^﻿/, "").trim();
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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error inesperado. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
