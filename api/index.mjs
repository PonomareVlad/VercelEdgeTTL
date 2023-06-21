export const config = {runtime: "edge"}

globalThis.invocations ??= 0

const born = new Date().toISOString()

export default async () => new Response(JSON.stringify({
    invocations: globalThis.invocations += 1,
    born
}))
