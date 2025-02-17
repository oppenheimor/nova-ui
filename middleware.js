import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === '/readiness') {
    return new NextResponse('success', { status: 200 });
  }
  return NextResponse.next();
}

export const config = {};