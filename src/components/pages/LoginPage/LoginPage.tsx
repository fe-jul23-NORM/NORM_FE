import React from 'react';
import './LoginPage.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const LoginPage: React.FC = () => {
  const logIn = () => {logIn()}
 
  return (
    <div className="wrapper-form">
        <form action="logIn-form"
          className="logIn-form">
          <h2>Sign in</h2>
   
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

export default LoginPage;
