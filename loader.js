export async function onRequest(context) {
  return new Response(
    JSON.stringify({
      status: "online",
      project: "Clipper Hub",
      message: "Loader API is ready"
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}