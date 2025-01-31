import { getAllVersion } from "@/src/shared/api/version";
import { NextResponse } from "next/server";

export async function GET() {
  const versions = await getAllVersion();
  return NextResponse.json(versions);
}
