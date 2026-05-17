import { NextResponse, type NextRequest } from "next/server";

const protectedPrefixes = ["/student", "/owner", "/admin"];

export function middleware(request: NextRequest) {
  const isProtected = protectedPrefixes.some((prefix) => request.nextUrl.pathname.startsWith(prefix));

  if (!isProtected) return NextResponse.next();

  const hasSupabaseEnv =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (!hasSupabaseEnv) {
    return NextResponse.next();
  }

  // Supabase Auth session enforcement is completed in server layouts once project keys are connected.
  return NextResponse.next();
}

export const config = {
  matcher: ["/student/:path*", "/owner/:path*", "/admin/:path*"]
};
