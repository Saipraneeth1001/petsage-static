import { kv } from "@vercel/kv";

const EMAIL_SET_KEY = "waitlist:emails";
const EMAIL_ORDER_KEY = "waitlist:order";
const EMAIL_TS_HASH_KEY = "waitlist:timestamps";

export type WaitlistAddResult = {
  status: "added" | "exists";
  email: string;
  createdAt: string;
};

export async function addToWaitlist(email: string): Promise<WaitlistAddResult> {
  const normalized = email.trim().toLowerCase();
  const createdAt = new Date().toISOString();
  const ts = Date.parse(createdAt);

  const added = await kv.sadd(EMAIL_SET_KEY, normalized);
  if (added === 1) {
    await Promise.all([
      kv.zadd(EMAIL_ORDER_KEY, { score: ts, member: normalized }),
      kv.hset(EMAIL_TS_HASH_KEY, { [normalized]: createdAt })
    ]);
    return { status: "added", email: normalized, createdAt };
  }

  const existing = (await kv.hget<string>(EMAIL_TS_HASH_KEY, normalized)) || createdAt;
  return { status: "exists", email: normalized, createdAt: existing };
}

export async function exportWaitlistCsv(): Promise<string> {
  const emails = (await kv.zrange<string[]>(EMAIL_ORDER_KEY, 0, -1)) || [];

  if (emails.length === 0) {
    return "email,createdAt\n";
  }

  const timestamps = (await kv.hmget<(string | null)[]>(
    EMAIL_TS_HASH_KEY,
    ...emails
  )) as (string | null)[];

  const rows = ["email,createdAt"];
  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    const createdAt = timestamps?.[i] || "";
    rows.push(`${csvEscape(email)},${csvEscape(createdAt)}`);
  }
  return `${rows.join("\n")}\n`;
}

function csvEscape(value: string) {
  if (value.includes('"') || value.includes(",") || value.includes("\n")) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  return value;
}

