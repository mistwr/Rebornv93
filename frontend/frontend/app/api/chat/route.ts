export async function POST(req: Request) {
  const { message } = await req.json();

  const res = await fetch("http://localhost:4000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  return Response.json(await res.json());
}
