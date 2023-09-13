import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import FormFields from "../../types/FormFields";
import { google, Auth } from "googleapis";

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
  const {
    data: {
      name,
      email,
      phone,
      address,
      zip,
      message,
      services,
      referralSource,
    },
  } = (await request.json()) as { data: FormFields };

  // const result = await sql`
  // INSERT INTO contact (name, email, phone, address, zip, services, referral_source, message)
  // VALUES (${name}, ${email}, ${phone}, ${address}, ${zip}, ${JSON.stringify(
  //   services
  // )}, ${JSON.stringify(referralSource)}, ${message});
  // `;

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
          services.join(","),
          referralSource.join(", "),
          message,
        ],
      ], // fill with the data you're inserting
    },
  });
  /*

  */

  console.log("success");
  // console.log(result);
  return NextResponse.json({ success: true });
}
