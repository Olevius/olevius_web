// Import the Supabase client factory (lets us talk to Supabase via HTTP)
import { createClient } from "@supabase/supabase-js";

// Create a Supabase client instance using environment variables from Vercel/server
// SUPABASE_URL: your project URL (safe to share)
// SUPABASE_SERVICE_ROLE_KEY: secret key with admin privileges (MUST stay server-only)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // server-only env var (never expose to frontend)
);

// Default export: Vercel will run this function when /api/<filename> is hit
export default async function handler(req, res) {
  // --- ADD CORS HEADERS HERE ---
  // Allow requests from any origin (change '*' to your specific frontend URL in production for better security)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle the browser's preflight check (OPTIONS request)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  // -----------------------------

  // Only allow POST requests (blocks GET, PUT, etc.)
  if (req.method !== "POST") {
    // Respond with HTTP 405 "Method Not Allowed" if someone uses the wrong method
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Pull "email" out of the JSON body (req.body); if body is null/undefined, use {}
  const { email } = req.body ?? {};

  // Basic validation: make sure email is a string and has an "@" in it
  // (This is lightweight validation—good enough to stop obvious junk)
  if (typeof email !== "string" || !email.includes("@")) {
    // Respond with HTTP 400 "Bad Request" if the email is invalid
    return res.status(400).json({ error: "Invalid email" });
  }

  // Insert a new row into the "waitlist" table with the email field
  // Supabase returns { data, error }; we only check error here
  const { error } = await supabase.from("waitlist").insert({ email });

  // If Supabase reported an error (e.g., table missing, RLS issues, duplicate constraint)
  if (error) {
    // Respond with HTTP 500 "Internal Server Error" and pass back the message
    return res.status(500).json({ error: error.message });
  }

  // If everything worked, respond with HTTP 200 and a simple success payload
  return res.status(200).json({ ok: true });
}