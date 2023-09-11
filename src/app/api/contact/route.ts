import { NextRequest, NextResponse } from "next/server";
import FormFields from "../../types/FormFields";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { data: FormFields };
  console.log("Contact route received: ", body);

  return NextResponse.json({ success: true });
}
