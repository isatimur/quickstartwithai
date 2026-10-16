import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// Serve the restored blog from this app. The old subdomain belongs to Ghost
// and must be redirected separately in its hosting/DNS configuration.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}
export const config = { matcher: ["/blog/:path*"] };
