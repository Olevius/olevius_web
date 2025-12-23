/**
 * This script sets up an Express.js server with the following functionality:
 * 
 * - Loads environment variables from `.env.local` and `.env` files using `dotenv`.
 * - Initializes an API handler for the `/api/waitlist` route.
 * - Configures middleware to parse JSON request bodies.
 * - Starts the server on a specified port (defaulting to 3000 if `PORT` is not set in the environment).
 * 
 * Dependencies:
 * - `express`: Web framework for Node.js.
 * - `dotenv`: Loads environment variables from `.env` files.
 * 
 * API Routes:
 * - `POST /api/waitlist`: Handles requests using the `waitlistHandler` function.
 * 
 * Environment Variables:
 * - `PORT`: The port number on which the server listens (default: 3000).
 * 
 * Usage:
 * - Ensure `.env.local` or `.env` files are properly configured with necessary environment variables.
 * - Start the server by running this script.
 */
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables first
dotenv.config({ path: '.env' });
dotenv.config();

// Import the handler AFTER loading env vars so Supabase client initializes correctly
import waitlistHandler from './api/waitlist.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route requests to your API handler
app.all('/api/waitlist', (req, res) => {
    // Assuming waitlist.js exports a default function (req, res) => ...
    return waitlistHandler(req, res);
});

app.listen(PORT, () => {
    console.log(`Backend server ruinning on http://localhost:${PORT}`);
});