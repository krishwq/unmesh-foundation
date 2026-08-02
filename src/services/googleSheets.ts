/**
 * Google Apps Script Integration Service
 * Submits form data (Donations, Volunteers, Test Bookings) to Google Spreadsheet
 */

export interface FormSubmissionPayload {
  action: 'donation' | 'volunteer' | 'book_test';
  timestamp?: string;
  id?: string;
  [key: string]: any;
}

// Default Google Apps Script URL (Can be changed in UI / localStorage)
const DEFAULT_SCRIPT_URL_KEY = 'https://script.google.com/macros/s/AKfycbyV39QdoxdCFNrAUuv-8WKpnGF0O0_stG0r15x9GS_hC4Kfv0TW_-tq7gssQ1o-5ySq/exec';

export function getStoredScriptUrl(): string {
  return localStorage.getItem(DEFAULT_SCRIPT_URL_KEY) || '';
}

export function setStoredScriptUrl(url: string): void {
  localStorage.setItem(DEFAULT_SCRIPT_URL_KEY, url.trim());
}

// Save locally as fallback and for admin view
export function getLocalSubmissions(): FormSubmissionPayload[] {
  try {
    const raw = localStorage.getItem('unmesh_form_submissions');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveLocalSubmission(payload: FormSubmissionPayload): void {
  try {
    const existing = getLocalSubmissions();
    existing.unshift(payload);
    localStorage.setItem('unmesh_form_submissions', JSON.stringify(existing));
  } catch (e) {
    console.error('Error saving local submission', e);
  }
}

/**
 * Submit form payload to Google Apps Script Web App
 */
export async function submitToGoogleSheets(
  action: 'donation' | 'volunteer' | 'book_test',
  formData: Record<string, any>
): Promise<{ success: boolean; refId: string; message: string }> {
  const refId = 'UNM-' + action.toUpperCase().substring(0, 3) + '-' + Math.floor(100000 + Math.random() * 900000);
  const payload: FormSubmissionPayload = {
    action,
    id: refId,
    timestamp: new Date().toISOString(),
    formattedDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    ...formData
  };

  console.log(payload);

  // 1. Always save to local storage
  saveLocalSubmission(payload);

  // 2. Try posting to Google Apps Script if URL is configured
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbyV39QdoxdCFNrAUuv-8WKpnGF0O0_stG0r15x9GS_hC4Kfv0TW_-tq7gssQ1o-5ySq/exec';

  if (scriptUrl) {
    try {
      // Google Apps Script Web Apps require no-cors mode or URLSearchParams for smooth browser POST
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      return {
        success: true,
        refId,
        message: 'Form submitted successfully!'
      };
    } catch (error) {
      console.warn('Google Script submit error (saved locally):', error);
      return {
        success: true,
        refId,
        message: 'Saved locally. (Check Google Script URL configuration if needed)'
      };
    }
  }

  return {
    success: true,
    refId,
    message: 'Form recorded successfully!'
  };
}

/**
 * Google Apps Script Code Template for Google Sheets setup
 */
export const GOOGLE_APPS_SCRIPT_CODE = `
// ======================================================
// UNMESH FOUNDATION - GOOGLE APPS SCRIPT WEB APP CODE
// Paste this code into Extensions -> Apps Script in Google Sheets
// ======================================================

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = {};
    
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    var action = data.action || 'general';
    var sheetName = getOrCreateSheetName(action);
    var sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // Auto initialize header if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = ["Timestamp", "Reference ID", "Action Type"];
      Object.keys(data).forEach(function(key) {
        if (key !== 'action' && key !== 'id' && key !== 'timestamp' && key !== 'formattedDate') {
          headers.push(capitalizeFirst(key));
        }
      });
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#163E96").setFontColor("#FFFFFF");
    }
    
    // Append row
    var row = [
      data.formattedDate || new Date().toLocaleString(),
      data.id || 'N/A',
      action.toUpperCase()
    ];
    
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    for (var i = 3; i < headers.length; i++) {
      var headerKey = headers[i].toLowerCase().replace(/\\s+/g, '');
      var foundValue = '';
      for (var k in data) {
        if (k.toLowerCase().replace(/\\s+/g, '') === headerKey) {
          foundValue = data[k];
          break;
        }
      }
      row.push(foundValue !== undefined ? foundValue : '');
    }
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data recorded successfully",
      id: data.id
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheetName(action) {
  if (action === 'donation') return 'Donations';
  if (action === 'volunteer') return 'Volunteers';
  if (action === 'book_test') return 'Test_Bookings';
  return 'Submissions';
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function doGet(e) {
  return ContentService.createTextOutput("Unmesh Foundation Webhook API is Active!");
}
`;
