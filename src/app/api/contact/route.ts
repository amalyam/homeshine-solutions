import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import FormFields from "../../types/FormFields";

export async function POST(request: NextRequest) {
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

  const result = await sql`
  INSERT INTO contact (name, email, phone, address, zip, services, referral_source, message)
  VALUES (${name}, ${email}, ${phone}, ${address}, ${zip}, ${JSON.stringify(
    services
  )}, ${JSON.stringify(referralSource)}, ${message});
  `;

  console.log(result);
  return NextResponse.json({ success: true });
}
