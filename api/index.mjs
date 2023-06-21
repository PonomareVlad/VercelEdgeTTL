export const config = {runtime: "edge"}

globalThis.invocations ??= 0

const born = new Date().toISOString()

const {VERCEL_REGION: region} = process.env

export default async ({headers}) => new Response(JSON.stringify({
    born,
    region,
    invocations: globalThis.invocations += 1,
    ip: headers.get("x-real-ip")
}))
