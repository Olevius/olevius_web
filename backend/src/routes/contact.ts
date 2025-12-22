import { Router } from "express";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
});

export const contactRouter = Router();

contactRouter.post("/", async (req, res) => {
  const { name, email, message, updates } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  await pool.execute(
    "INSERT INTO contact_submissions (name, email, message, wants_updates) VALUES (?, ?, ?, ?)",
    [name, email, message, updates ? 1 : 0]
  );

  res.status(201).json({ ok: true });
});