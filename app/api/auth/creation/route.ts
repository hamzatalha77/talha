export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const password = searchParams.get('password')

  if (!email || !password) {
    return new Response('Missing email or password', { status: 400 })
  }

  // Simulate user creation
  const user = { id: Date.now(), email, password }
  return new Response(JSON.stringify(user), { status: 201 })
}
