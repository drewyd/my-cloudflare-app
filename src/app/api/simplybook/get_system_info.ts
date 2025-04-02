export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const apiUrl = "https://user-api-v2.simplybook.me/get_system_info";

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Company-Login": env.SB_COMPANY_LOGIN,
        "X-Token": env.SB_API_TOKEN,
      },
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
