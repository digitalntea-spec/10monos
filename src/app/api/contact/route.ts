import { NextResponse } from "next/server";
import { Resend } from "resend";
import { emailTemplate } from "@/lib/email-template";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  // Inicialización dentro de la función para evitar ejecución en build time
  const apiKey = (process.env.RESEND_API_KEY ?? "").replace(/^﻿/, "");
  const resend = new Resend(apiKey);
  try {
    const body = await request.json();
    const { nombre, empresa, telefono, email, mensaje } = body;

    if (!nombre?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const errors: string[] = [];

    // 1. Enviar email via Resend
    try {
      await resend.emails.send({
        from: "10 Monos <onboarding@resend.dev>",
        to: ["digital.ntea@gmail.com"],
        replyTo: email,
        subject: `Nuevo contacto: ${nombre}${empresa ? ` · ${empresa}` : ""}`,
        html: emailTemplate({ nombre, empresa, telefono, email, mensaje }),
      });
    } catch (emailError) {
      console.error("Error Resend:", emailError);
      errors.push("email");
    }

    // 2. Guardar en Google Sheets via Apps Script webhook
    const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
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
        console.error("Error Sheets:", sheetsError);
        errors.push("sheets");
      }
    }

    // Si el email falló, retornar error
    if (errors.includes("email")) {
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intentá de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error API contact:", err);
    return NextResponse.json(
      { error: "Error inesperado. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
