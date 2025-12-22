const port = Number(process.env.PORT ?? 3001);

const server = Bun.serve({
  port,
  hostname: "0.0.0.0",
  async fetch(request) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/hello" && request.method === "GET") {
      return Response.json({ message: "Hello from Bun!" });
    }

    if (pathname === "/health") {
      return Response.json({ status: "ok" });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Backend listening on http://0.0.0.0:${server.port}`);
