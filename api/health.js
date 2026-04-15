import { json } from "./_lib/http.js";
import { getRuntimeMeta } from "./_lib/store.js";

export async function GET() {
  return json({
    ok: true,
    ...getRuntimeMeta()
  });
}
