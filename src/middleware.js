import createMiddleware from "next-intl/middleware"

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["en", "tr"],

	// Used when no locale matches
	defaultLocale: "en",
})

export const config = {
	// Match only internationalized pathnames
	matcher: [
		"/",
		"/(tr|en)/:path*",
		"/((?!api|_next|_vercel|admin|.*\\..*).*)",
		// However, match all pathnames within `/users`, optionally with a locale prefix
		"/([\\w-]+)?/users/(.+)",
	],
}

export const authMiddleware = {
	publicRoutes: [
		"/(tr|en)/:path/*",
		"/",
		"/((?!api|_next|_vercel|admin|.*\\..*).*)",
	],
}
