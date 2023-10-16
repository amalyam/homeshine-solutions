import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import FormFields from "../../types/FormFields";
import { google, Auth } from "googleapis";
import emailBodyHtml from "./emailBodyHtml";

const googleService = google.sheets({
  version: "v4",
  auth: new google.auth.GoogleAuth({
    credentials: {
      type: "service_account",
      quota_project_id: "homeshine-website",
      client_id: process.env.GOOGLE_CLOUD_CLIENT_ID,
      client_email: process.env.GOOGLE_CLOUD_EMAIL,
      private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  }),
});

export async function POST(request: NextRequest) {
  console.log("request to contact route");
  const { data } = (await request.json()) as { data: FormFields };
  console.log(`contact: data: ${JSON.stringify(data)}`);
  const {
    name,
    email,
    phone,
    address,
    zip,
    message,
    services,
    referralSource,
  } = data;

  const emailBody = {
    recipients: [
      {
        address: {
          email: `${email}`,
          name: `${name}`,
        },
      },
    ],
    content: {
      from: {
        name: "HomeShine Solutions, LLC.",
        email: "noreply@mail.homeshinesolutions.com",
      },
      subject: "Free Quote - Copy of Your Responses",
      reply_to: "Michael Elias <michael.homeshinesolutions@gmail.com>",
      html: emailBodyHtml(data),
    },
  };

  console.log(`sending email to ${email}: ${JSON.stringify(emailBody)}`);
  const response = await fetch(
    "https://api.sparkpost.com/api/v1/transmissions",
    {
      method: "POST",
      body: JSON.stringify(emailBody),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.SPARK_POST_API_KEY!,
      },
    }
  );
  console.log(
    `Email send complete, response: ${JSON.stringify(await response.json())}`
  );

  // const result = await sql`
  // INSERT INTO contact (name, email, phone, address, zip, services, referral_source, message)
  // VALUES (${name}, ${email}, ${phone}, ${address}, ${zip}, ${JSON.stringify(
  //   services
  // )}, ${JSON.stringify(referralSource)}, ${message});
  // `;

  console.log("Adding row to spreadsheet");
  await googleService.spreadsheets.values.append({
    spreadsheetId: "1HpxH5RSSLOrpKdRCwm7h0Ndneo2SSMBB2UOhS0Yl3QM", // from the URL
    range: process.env.CONTACT_SHEET_NAME, // or whatever other sheet name you name it
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
          }),
          name,
          email,
          phone,
          address,
          zip,
          services?.join(",") ?? "",
          referralSource?.join(", ") ?? "",
          message,
        ],
      ], // fill with the data you're inserting
    },
  });

  console.log("success");
  return NextResponse.json({ success: true });
}
