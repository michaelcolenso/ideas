import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "subscribers.json");

async function getSubscribers(): Promise<string[]> {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Simple file-based storage — swap for your preferred email service:
    //   - Resend audiences
    //   - ConvertKit / Mailchimp API
    //   - Database table
    const subscribers = await getSubscribers();

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: "Already subscribed" });
    }

    subscribers.push(email);
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));

    console.log(`[SUBSCRIBER] New: ${email} (total: ${subscribers.length})`);
    return NextResponse.json({ message: "Subscribed" });
  } catch (err: any) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
