export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);
    const targetPath = url.pathname.replace('/api', '');
    const apiUrl = `https://user-api-v2.simplybook.me${targetPath}`;

    const response = await fetch(apiUrl, {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        "X-Company-Login": env.SB_COMPANY_LOGIN,
        "X-Token": env.SB_API_TOKEN,
      },
      body: request.method === "POST" ? await request.text() : undefined,
    });

    return new Response(await response.text(), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
    });
  },
};
