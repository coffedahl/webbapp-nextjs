import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession();

  // Get user from session
  const user = await supabase.auth.getUser();

  // If user tries to access acount route and is not logged in
  if (req.nextUrl.pathname.startsWith("/acount") && user.error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}
