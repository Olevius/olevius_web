import "dotenv/config";
import express from "express";
import pg from "pg";

const { Pool } = pg;
const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required for most hosted postgres
});

app.get("/health", async (req, res) => {
  try {
    const r = await pool.query("select 1 as ok");
    res.json({ ok: true, db: r.rows[0].ok === 1 });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.post("/entries", async (req, res) => {
  const { name, value } = req.body;

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
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/entries", async (req, res) => {
  try {
    const result = await pool.query(
      "select id, name, value, created_at from entries order by id desc limit 50"
    );
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`API on http://localhost:${process.env.PORT || 3000}`);
});
