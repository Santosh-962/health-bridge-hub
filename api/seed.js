import { error, json, readJson } from "./_lib/http.js";
import { assertBackendConfigured, bulkSeed, getRuntimeMeta } from "./_lib/store.js";

export async function POST(request) {
  try {
    assertBackendConfigured();
    const payload = await readJson(request);
    await bulkSeed(payload);

    return json({
      ok: true,
      ...getRuntimeMeta()
    });
  } catch (backendError) {
    return error(backendError.message, 503, getRuntimeMeta());
  }
}
