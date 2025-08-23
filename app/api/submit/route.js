// app/api/submit/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json(); 
    const { name, email, message } = formData;

    // The Google Forms URL for submission (ending in /formResponse)
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSed7mRDzG5_lG4tEozOZD6gFewsjxRe2VvtPNDtlSAU7uE6cQ/formResponse";

    // The entry IDs must match the fields of your new Google Form
    const FIELD_NAME_ENTRY_ID = 'entry.44958357';
    const FIELD_EMAIL_ENTRY_ID = 'entry.1617159704';
    const FIELD_MESSAGE_ENTRY_ID = 'entry.1032626322';

    // Construct the URL-encoded payload for Google Forms
    const googleFormData = new URLSearchParams();
    googleFormData.append(FIELD_NAME_ENTRY_ID, name);
    googleFormData.append(FIELD_EMAIL_ENTRY_ID, email);
    googleFormData.append(FIELD_MESSAGE_ENTRY_ID, message);

    // Forward the request to Google Forms
    const googleFormResponse = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: googleFormData.toString(),
    });

    if (googleFormResponse.status === 200) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
    } else {
      console.error('Google Form submission failed with status:', googleFormResponse.status);
      return NextResponse.json({ success: false, message: "Failed to submit to Google Form." }, { status: 500 });
    }

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, message: "Server error occurred." }, { status: 500 });
  }
}