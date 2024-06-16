/**
 * Next.js will then call the register function within the instrumentation.ts file whenever
 * a new Next.js server instance is bootstrapped.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
 */

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./server/db/migrate");
  }
}
