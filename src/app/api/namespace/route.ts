import { getNamespacesByVersion } from "@/src/shared/api/namespace";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const versionId = request.nextUrl.searchParams.get("versionId");

  if (!versionId) {
    return NextResponse.json(
      { error: "versionId is required" },
      { status: 400 },
    );
  }

  const res = await getNamespacesByVersion(versionId);
  return NextResponse.json(res);
}
