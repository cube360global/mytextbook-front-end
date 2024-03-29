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
  PasswordReset = 'reset-password',
  PasswordResetSucceeded = 'password-reset-succeeded',
  PasswordResetFailed = 'password-reset-failed',
  AboutUs = 'about-us',

  // App base url
  App = 'app',

  // Features
  UserDetails = 'user-details',
  Content = 'content',
  Books = 'books',
  Subscriptions = 'subscriptions',
  All = 'all',
  BookContent = 'book-content',
  VideoPlayer = 'video-player',
  History = 'watch-history',

  Public = 'public',
  Private = 'private'
}
