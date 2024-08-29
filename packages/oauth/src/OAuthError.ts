export class OAuthError extends Error {
  cause: unknown

  constructor(message: string, cause: unknown) {
    super(message)
    this.cause = cause
    this.name = "OAuthError"

    // Set the prototype explicitly to fix issues with instanceof checks
    Object.setPrototypeOf(this, OAuthError.prototype)
  }
}
