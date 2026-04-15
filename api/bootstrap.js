import { error, json } from "./_lib/http.js";
import { assertBackendConfigured, getDatabaseState, getRuntimeMeta } from "./_lib/store.js";

export async function GET() {
  try {
    assertBackendConfigured();
    const database = await getDatabaseState();

    return json({
      ...database,
      ...getRuntimeMeta()
    });
  } catch (backendError) {
    return error(backendError.message, 503, getRuntimeMeta());
  }
}
