export function middleware(request) {
  const currentUser = request.cookies.get("authtoken")?.value;
  const publicRoutes = ["/login", "/create-account"];
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  if (currentUser && isPublicRoute) {
    return Response.redirect(new URL("/", request.url));
  }
  if (!currentUser && !isPublicRoute) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/login", "/create-account", "/my-account"],
};
