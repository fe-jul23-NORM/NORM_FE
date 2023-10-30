import React, { useCallback, useState } from 'react';
import './RegisterPage.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const RegisterPage: React.FC = () => {
  const logIn = () => {logIn()}
 
  return (
    <div className="wrapper-form">
      <form action="logIn-form"
        className="logIn-form">
        <h2>Sign up</h2>

          <div className="input-container">
            <Input 
              name="first name"
              placeholder="Enter first name ..."
            />
          </div>

          <div className="input-container">
            <Input 
              name="last name"
              placeholder="Enter last name ..."
            />
          </div>

          <div className="input-container">
            <Input 
              name="e-mail"
              placeholder="Enter e-mail ..."
            />
          </div>

          <div className="input-container">
            <Input 
              name="password"
              placeholder="Enter password ..."
            />
          </div>

          <div className="input-container">
            <Input 
              name="password"
              placeholder="Confirm password ..."
            />
          </div>

          <div className="button-container">
            <Button 
              text='Log in'
              handleClick={logIn}
            />
          </div> 
      </form>
    </div>

  )
}

export default RegisterPage;
