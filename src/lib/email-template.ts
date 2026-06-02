interface ContactData {
  nombre: string;
  empresa?: string;
  telefono?: string;
  email: string;
  mensaje?: string;
}

export function emailTemplate(data: ContactData): string {
  const { nombre, empresa, telefono, email, mensaje } = data;
  const fecha = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#161616;border:1px solid #2a2a2a;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
          <div style="display:inline-flex;align-items:center;gap:10px;margin-bottom:8px;">
            <div style="background:#FF5A1F;color:#fff;font-weight:900;font-size:14px;width:32px;height:32px;border-radius:8px;display:inline-block;line-height:32px;text-align:center;">10</div>
            <span style="color:#fff;font-weight:900;font-size:20px;">Monos</span>
          </div>
          <p style="color:#9CA3AF;font-size:13px;margin:4px 0 0;">Nuevo contacto desde el sitio web</p>
        </td></tr>

        <!-- Alert bar -->
        <tr><td style="background:#FF5A1F;padding:12px 40px;">
          <p style="color:#fff;font-size:13px;font-weight:700;margin:0;text-align:center;">
            🚀 Nuevo lead recibido — ${fecha}
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#161616;border:1px solid #2a2a2a;border-top:none;padding:40px;">

          <table width="100%" cellpadding="0" cellspacing="0">
            ${row("👤 Nombre", nombre)}
            ${empresa ? row("🏢 Empresa", empresa) : ""}
            ${telefono ? row("📞 Teléfono", telefono) : ""}
            ${row("📧 Email", `<a href="mailto:${email}" style="color:#FF5A1F;text-decoration:none;">${email}</a>`)}
            ${mensaje ? messageRow(mensaje) : ""}
          </table>

          <!-- CTA -->
          <div style="text-align:center;margin-top:32px;">
            <a href="https://wa.me/5491140784646?text=Hola%20${encodeURIComponent(nombre)}%2C%20vi%20tu%20consulta%20en%2010%20Monos"
               style="background:#FF5A1F;color:#fff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:100px;text-decoration:none;display:inline-block;">
              Responder por WhatsApp →
            </a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#111;border:1px solid #2a2a2a;border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
          <p style="color:#4B5563;font-size:11px;margin:0;">
            Este email fue generado automáticamente por el formulario de <strong style="color:#9CA3AF;">10monos.vercel.app</strong>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid #2a2a2a;">
      <span style="color:#4B5563;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:4px;">${label}</span>
      <span style="color:#fff;font-size:15px;">${value}</span>
    </td>
  </tr>`;
}

function messageRow(mensaje: string): string {
  return `
  <tr>
    <td style="padding:12px 0;">
      <span style="color:#4B5563;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:8px;">💬 Mensaje</span>
      <div style="background:#1f1f1f;border:1px solid #2a2a2a;border-radius:10px;padding:16px;color:#e5e7eb;font-size:14px;line-height:1.6;">
        ${mensaje.replace(/\n/g, "<br>")}
      </div>
    </td>
  </tr>`;
}
