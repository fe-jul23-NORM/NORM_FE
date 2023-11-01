export enum ErrorMessageEnum {
  RequiredField = 'Required field',
  IncorrectValue = 'Incorrect value',
  AtLeastOneUpperCase = 'At least 1 letter in upper case',
  AtLeastOneDigit = 'At least 1 digit',
  PasswordDontMatch = 'Passwords dont match'
}

export enum ErrorEnum {
  InvalidData = 'INVALID_DATA',
  WrongLoginPassword = 'WRONG_LOGIN_PASSWORD',
  UserAlreadyExist = 'USER_ALREADY_EXIST',
  UndefinedToken = 'UNDEFINED_TOKEN',
  TokenExpired = 'TOKEN_EXPIRED',
  NotAuthorized = 'NOT_AUTHORIZED',
  EmptyCart = 'EMPTY_CART',
  UndefinedProduct = 'UNDEFINED_PRODUCT',
  AlreadyInFavorites = 'ALREADY_IN_FAVORITES',
}

export enum ErrorNotificationEnum {
  InvalidData = 'Invalid data',
  WrongLoginPassword = 'Wrong email or password',
  UserAlreadyExist = 'User already exists',
  UndefinedToken = 'Undefined token',
  TokenExpired = 'Token expired',
  NotAuthorized = 'Not authorized',
  EmptyCart = 'Empty cart',
  UndefinedProduct = 'Product not found',
  AlreadyInFavorites = 'Already in favorites',
  SomethingWentWrong = 'Something went wrong',
}
