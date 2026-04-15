const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};

export function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    status: init.status || 200,
    headers: {
      ...JSON_HEADERS,
      ...(init.headers || {})
    }
  });
}

export function error(message, status = 400, extras = {}) {
  return json(
    {
      ok: false,
      error: message,
      ...extras
    },
    { status }
  );
}

export function methodNotAllowed(allowed) {
  return error("Method not allowed", 405, { allowed });
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch (requestError) {
    throw new Error("Invalid JSON body");
  }
}
