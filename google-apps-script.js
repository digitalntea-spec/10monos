/**
 * INSTRUCCIONES:
 * 1. Abrí Google Sheets en drive.google.com → Nuevo → Google Sheets
 * 2. Nombralo "10 Monos - Leads"
 * 3. Ir a Extensiones → Apps Script
 * 4. Borrá el código existente y pegá TODO este archivo
 * 5. Guardá (Ctrl+S)
 * 6. Clic en "Implementar" → "Nueva implementación"
 * 7. Tipo: "Aplicación web"
 * 8. Ejecutar como: "Yo"
 * 9. Quién tiene acceso: "Cualquier usuario"
 * 10. Clic en "Implementar" y copiá la URL
 * 11. Pegá esa URL como SHEETS_WEBHOOK_URL en las variables de entorno de Vercel
 */

const HEADERS = ["Fecha", "Nombre", "Empresa", "Teléfono", "Email", "Mensaje"];

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Crear encabezados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.getRange(1, 1, 1, HEADERS.length).setBackground("#FF5A1F");
      sheet.getRange(1, 1, 1, HEADERS.length).setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("es-AR"),
      data.nombre || "",
      data.empresa || "",
      data.telefono || "",
      data.email || "",
      data.mensaje || "",
    ]);

    // Auto-ajustar columnas
    sheet.autoResizeColumns(1, HEADERS.length);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "ok" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test manual desde Apps Script (Ejecutar → doGet)
function doGet() {
  return ContentService.createTextOutput("Webhook 10 Monos activo ✓");
}
