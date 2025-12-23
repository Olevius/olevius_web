// Import the Supabase client factory (lets us talk to Supabase via HTTP)
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
// We do this lazily or with checks to ensure we don't crash if env vars are missing
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export default async function handler(req, res) {
  // --- ADD CORS HEADERS HERE ---
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. Check for Environment Variables
  if (!supabase || !supabaseUrl || !supabaseKey) {
    console.error("CRITICAL ERROR: Missing Supabase Environment Variables.");
    console.error("SUPABASE_URL:", supabaseUrl ? "Set" : "Missing");
    console.error("SUPABASE_SERVICE_ROLE_KEY:", supabaseKey ? "Set" : "Missing");
    return res.status(500).json({ 
      error: "Server Configuration Error: Missing Environment Variables. Check Vercel Logs." 
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email } = req.body ?? {};

    if (typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // 2. Perform Insert
    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      console.error("SUPABASE ERROR:", error); // This will show in Vercel Function Logs
      // Return the actual message from Supabase so we can see it in the frontend or network tab
      return res.status(500).json({ error: error.message || "Database Error" });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error("UNEXPECTED SERVER ERROR:", err);
    return res.status(500).json({ error: "Unexpected Server Error" });
  }
}
