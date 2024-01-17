/**
 * An array of routes that are public.
 * These routes are accessible by anyone, even users who are not logged in.
 */

export const publicRoutes = [
  "/"
]

/**
 * An array of routes that are private.
 * These routes are only accessible to users who are logged in.
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register"
]

export const apiAuthPrefix = "/api/auth"

/**
 * The default route to redirect to after a user logs in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"