import { REGISTER_VALIDATION } from '../constants/validation';
import { ErrorType } from '../types/core.types';
import { EMAIL_REGEX, NAME_REGEX, NUMBER_REGEX, PASSWORD_REGEX, UPPER_CASE_REGEX } from '../constants/regex';
import { ErrorMessageEnum } from '../types/error.types';
import { IRegister } from '../types/auth.types';

export function validateFirstName(str: string): ErrorType {
  const errors: Record<string, string> = {};
  const trimmed = str.trim();
  
  if (trimmed === '') {
    errors.firstName = ErrorMessageEnum.RequiredField;
    return errors;
  }
  
  if (!NAME_REGEX.test(trimmed)) {
    errors.firstName = ErrorMessageEnum.IncorrectValue;
    return errors;
  }
  
  if (trimmed.length < REGISTER_VALIDATION.minFirstName) {
    errors.firstName = `At least ${ REGISTER_VALIDATION.minFirstName } characters`;
    return errors;
  }
  
  if (trimmed.length > REGISTER_VALIDATION.maxFirstName) {
    errors.firstName = `Less than ${ REGISTER_VALIDATION.maxFirstName } characters`;
    return errors;
  }
  
  return errors;
}

export function validateLastName(str: string): ErrorType {
  const errors: Record<string, string> = {};
  const trimmed = str.trim();
  
  if (trimmed === '') {
    errors.lastName = ErrorMessageEnum.RequiredField;
    return errors;
  }
  
  if (!NAME_REGEX.test(trimmed)) {
    errors.lastName = ErrorMessageEnum.IncorrectValue;
    return errors;
  }
  
  if (trimmed.length < REGISTER_VALIDATION.minLastName) {
    errors.lastName = `At least ${ REGISTER_VALIDATION.minLastName } characters`;
    return errors;
  }
  
  if (trimmed.length > REGISTER_VALIDATION.maxLastName) {
    errors.lastName = `Less than ${ REGISTER_VALIDATION.maxLastName }  characters`;
    return errors;
  }
  
  return errors;
}

function validateEmail(str: string): ErrorType {
  const errors: Record<string, string> = {};
  const trimmed = str.trim();
  
  if (trimmed === '') {
    errors.email = ErrorMessageEnum.RequiredField;
    return errors;
  }
  
  if (!EMAIL_REGEX.test(trimmed)) {
    errors.email = ErrorMessageEnum.IncorrectValue;
    return errors;
  }
  
  return errors;
}

function validatePassword(str: string): ErrorType {
  const errors: Record<string, string> = {};
  const trimmed = str.trim();
  
  if (trimmed === '') {
    errors.password = ErrorMessageEnum.RequiredField;
    return errors;
  }
  
  if (!PASSWORD_REGEX.test(trimmed)) {
    errors.password = ErrorMessageEnum.IncorrectValue;
    return errors;
  }
  
  if (!UPPER_CASE_REGEX.test(trimmed)) {
    errors.password = ErrorMessageEnum.AtLeastOneUpperCase;
    return errors;
  }
  
  if (!NUMBER_REGEX.test(trimmed)) {
    errors.password = ErrorMessageEnum.AtLeastOneDigit;
    return errors;
  }
  
  if (trimmed.length < REGISTER_VALIDATION.minPassword) {
    errors.password = `At least ${ REGISTER_VALIDATION.minPassword } characters`;
    return errors;
  }
  
  if (trimmed.length > REGISTER_VALIDATION.maxPassword) {
    errors.password = `Less than ${ REGISTER_VALIDATION.maxPassword }  characters`;
    return errors;
  }
  
  return errors;
}

function validateConfirmPassword(password: string, confirmPassword: string) {
  const errors: ErrorType = {};
  
  const trimmedPassword = password.trim();
  const trimmedConfirmPassword = confirmPassword.trim();
  
  if (trimmedConfirmPassword === '') {
    errors.confirmPassword = ErrorMessageEnum.RequiredField;
    return errors;
  }
  
  if (trimmedPassword !== trimmedConfirmPassword) {
    errors.confirmPassword = ErrorMessageEnum.PasswordDontMatch;
    return errors;
  }
  
  return errors;
}

export function getRegisterValidation(values: IRegister): ErrorType {
  const firstNameValidation = validateFirstName(values.firstName);
  const lastNameValidation = validateLastName(values.lastName);
  const emailValidation = validateEmail(values.email);
  const passwordValidation = validatePassword(values.password);
  const confirmPasswordValidation = validateConfirmPassword(values.password, values.confirmPassword)
  
  return {
    ...firstNameValidation,
    ...lastNameValidation,
    ...emailValidation,
    ...passwordValidation,
    ...confirmPasswordValidation,
  };
}
