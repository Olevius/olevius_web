import "dotenv/config";
import express from "express";
import pg from "pg";

const { Pool } = pg;

const app = express();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required to start the API");
}

const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
});

app.use(express.json());

app.use((req, res, next) => {
  const origin = process.env.CLIENT_ORIGIN ?? "*";
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.get("/health", async (_req, res) => {
  try {
    const result = await pool.query("select 1 as ok");
    res.json({ ok: true, db: result.rows[0]?.ok === 1 });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.post("/api/waitlist", async (req, res) => {
  const { email, consent } = req.body ?? {};

  if (typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ error: "Email is required" });
  }

  const normalisedEmail = email.trim().toLowerCase();

  try {
    const result = await pool.query(
      `insert into waitlist_entries (email, consent)
       values ($1, $2)
       on conflict (email) do update set consent = excluded.consent
       returning id, email, consent, created_at`,
      [normalisedEmail, Boolean(consent)]
    );

    res.status(201).json({ ok: true, entry: result.rows[0] });
  } catch (error) {
    const code = error?.code;

    if (code === "42P01") {
      return res.status(500).json({
        error: "Table waitlist_entries does not exist. Create it before posting entries.",
      });
    }

    res.status(500).json({ error: "Failed to save waitlist entry" });
  }
});

app.post("/entries", async (req, res) => {
  const { name, value } = req.body ?? {};

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "name must be a non-empty string" });
  }

  if (!Number.isInteger(value)) {
    return res.status(400).json({ error: "value must be an integer" });
  }

  try {
    const result = await pool.query(
      "insert into entries (name, value) values ($1, $2) returning id, name, value, created_at",
      [name.trim(), value]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/entries", async (_req, res) => {
  try {
    const result = await pool.query(
      "select id, name, value, created_at from entries order by id desc limit 50"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = Number(process.env.PORT ?? 3000);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
