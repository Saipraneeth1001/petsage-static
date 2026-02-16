import { NextResponse } from "next/server";
import { exportWaitlistCsv } from "@/lib/waitlistStore";

export async function GET(req: Request) {
  const adminToken = process.env.ADMIN_TOKEN || "";
  const headerToken = req.headers.get("x-admin-token") || "";

  if (!adminToken || headerToken !== adminToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const csv = await exportWaitlistCsv();
    return new NextResponse(csv, {
      status: 200,
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": 'attachment; filename="petsage-waitlist.csv"'
      }
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

