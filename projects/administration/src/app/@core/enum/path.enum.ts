export enum Path {
  // Public
  Home = '',
  Admin = 'admin',
  InternalServerError = 'internal-server-error',
  NotFound = '404',

  // Auth
  Auth = '',
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
  Dashboard = 'dashboard',
  Users = 'users',
  Content = 'content',
  Book = 'book',
  Subject = 'subject',

  // option
  All = 'all',
  Add = 'add',
  View = 'view',
  Edit = 'edit'

}
