export enum Path {
  // Public
  Home = '',
  User = 'user',
  InternalServerError = 'internal-server-error',
  NotFound = '404',

  // Auth
  Auth = 'auth',
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  ForgotPassword = 'forgot-password',
  ForgotPasswordEmailSent = 'forgot-password-email-sent',
  PasswordReset = 'password-reset',
  PasswordResetSucceeded = 'password-reset-succeeded',
  PasswordResetFailed = 'password-reset-failed',

  // App base url
  App = 'app',

  // Features
  UserDetails = 'user-details',
  Content = 'content',
  Public = 'public',
  Private = 'private'
}
