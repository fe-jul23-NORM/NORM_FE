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
  EmptyCard = 'EMPTY_CART',
  UndefinedProduct = 'UNDEFINED_PRODUCT',
  AlreadyInFavorites = 'ALREADY_IN_FAVORITES',
}
