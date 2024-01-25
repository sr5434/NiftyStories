import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/dashboard", "/api/newPost", "/api/getPosts", "/sign-in", "/sign-up", "/terms", "/privacy", "/buy", "/sell"]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};