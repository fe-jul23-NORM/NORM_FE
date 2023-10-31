import React, { useCallback, useState } from 'react';
import './RegisterPage.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { useAppDispatch, useAppSelector } from '../../../store';
import { register } from '../../../store/auth/thunks';
import { getRegisterValidation } from '../../../validation/auth.validation';
import { IRegister } from '../../../types/auth.types';
import { selectAuthLoading } from '../../../store/auth/selectors';
import { useNavigate } from 'react-router';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
}

const RegisterPage: React.FC = () => {
  const [values, setValues] = useState<IRegister>({
    ...initialValues,
    errors: getRegisterValidation(initialValues)
  });
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAuthLoading);
  const navigate = useNavigate();
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => {
      const newState = {
        ...prev,
        [e.target.name]: e.target.value,
      }
      
      return {
        ...newState,
        errors: getRegisterValidation(newState)
      }
    })
  }, []);
  
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    
    dispatch(register(values))
      .unwrap()
      .then(() => {
      navigate('/')
      })
      .catch((e) => {
        //TODO
        console.log(e);
      })
    
  };
  
  return (
    <div className="register-page-wrapper">
      <div className="register-content-wrapper">
        <h2 className="register-title">Sign up</h2>
        
        <div className="register-content-holder">
          <form className="register-form">
            
            <div className="input-container">
              <Input
                name="firstName"
                placeholder="Enter first name"
                onChange={handleChange}
                value={values.firstName}
                error={values.errors.firstName}
                isInvalid={Boolean(values.errors.firstName)}
              />
            </div>
            
            <div className="input-container">
              <Input
                name="lastName"
                placeholder="Enter last name"
                onChange={handleChange}
                value={values.lastName}
                error={values.errors.lastName}
                isInvalid={Boolean(values.errors.lastName)}
              />
            </div>
            
            <div className="input-container">
              <Input
                name="email"
                placeholder="Enter e-mail"
                onChange={handleChange}
                value={values.email}
                error={values.errors.email}
                isInvalid={Boolean(values.errors.email)}
              />
            </div>
            
            <div className="input-container">
              <Input
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                value={values.password}
                error={values.errors.password}
                isInvalid={Boolean(values.errors.password)}
                isSecure
              />
            </div>
            
            <div className="input-container">
              <Input
                name="confirmPassword"
                placeholder="Enter confirm password"
                onChange={handleChange}
                value={values.confirmPassword}
                error={values.errors.confirmPassword}
                isInvalid={Boolean(values.errors.confirmPassword)}
                isSecure
              />
            </div>
            
            <div className="register-button-container">
              <Button
                text="Sign Up"
                handleClick={handleSubmit}
                disabled={Object.values(values.errors).length > 0 || isLoading}
              />
            </div>
            
            <div className="register-page-link-wrapper">
              <span>Already have an account?</span>
              <a href="/login" className="register-page-link">Sign in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;
