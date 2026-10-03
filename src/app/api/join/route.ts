import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const role = String(body.role || "").trim();

    if (!name || !email || !["member", "volunteer"].includes(role)) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    // Production: queue for staff review + email notification.
    console.info("[join]", {
      name,
      email,
      phone: body.phone || null,
      role,
      skills: body.skills || null,
      availability: body.availability || null,
      messageLength: String(body.message || "").length,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, status: "pending_review" });
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}
