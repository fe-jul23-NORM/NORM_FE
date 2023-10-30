import React, { useCallback, useState } from 'react';
import './RegisterPage.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { useAppDispatch } from '../../../store';
import { register } from '../../../store/auth/thunks';

const RegisterPage: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(register(values));
  };

  return (
    <div className="wrapper-form">
        <form action="logIn-form"
          className="logIn-form">
          <h2>Sign up</h2>

          <div className="input-container">
            <Input 
              name="firstName"
              placeholder="Enter first name ..."
              onChange={handleChange}
              value={values.firstName}
            />
          </div>

          <div className="input-container">
            <Input 
              name="lastName"
              placeholder="Enter last name ..."
              onChange={handleChange}
              value={values.lastName}
            />
          </div>

          <div className="input-container">
            <Input 
              name="email"
              placeholder="Enter e-mail ..."
              onChange={handleChange}
              value={values.email}
            />
          </div>

          <div className="input-container">
            <Input 
              name="password"
              placeholder="Enter password ..."
              onChange={handleChange}
              value={values.password}
            />
          </div>

          <div className="input-container">
            <Input 
              name="confirmPassword"
              placeholder="Confirm password ..."
              onChange={handleChange}
              value={values.confirmPassword}
            />
          </div>

          <div className="button-container">
            <Button 
              text='Log in'
              handleClick={handleSubmit}
            />
          </div> 
      </form>
    </div>

  )
}

export default RegisterPage;
