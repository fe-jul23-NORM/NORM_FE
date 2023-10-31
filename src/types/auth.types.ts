import { ErrorType } from './core.types';

export interface IRegister {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  errors: ErrorType,
}

export interface ILogin {
  email: string,
  password: string,
}
