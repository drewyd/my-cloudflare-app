export const runtime = "edge"; // Ensures it's optimized for Cloudflare

export async function POST(req: Request) {
  const url = "https://user-api-v2.simplybook.me/v2/auth";

  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    company: process.env.SB_COMPANY_LOGIN, 
    api_key: process.env.SB_API_TOKEN,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow frontend access
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch SimplyBook API" }),
      { status: 500 }
    );
  }
}
