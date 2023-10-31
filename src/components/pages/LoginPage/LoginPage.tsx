import React, { useCallback, useEffect, useState } from 'react';
import './LoginPage.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { ILogin } from '../../../types/auth.types';
import { login } from '../../../store/auth/thunks';
import { useAppDispatch, useAppSelector } from '../../../store';
import { useNavigate } from 'react-router';
import { selectAuthLoading, selectUser } from '../../../store/auth/selectors';
import Input from '../../Input/Input';

const LoginPage: React.FC = () => {
  const [values, setValues] = useState<ILogin>({
    email: '',
    password: '',
  })
  const user = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectAuthLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }, []);
  
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    
    dispatch(login(values))
      .unwrap()
      .then(() => {
        navigate('/')
      })
      .catch((e) => {
        // TODO
        console.log(e);
      });
  };
  
  return (
    <div className="login-page-wrapper">
      <div className="login-content-wrapper">
        <h2 className="login-title">Sign In</h2>
        
        <div className="login-content-holder">
          <form className="login-form">
            
            <div className="input-container">
              <Input
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            
            <div className="input-container">
              <Input
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                value={values.password}
                isSecure
              />
            </div>
            
            <div className="login-button-container">
              <Button
                text="Sign In"
                handleClick={handleSubmit}
                disabled={isLoading || !values.email.length || !values.password.length}
              />
            </div>
            
            <div className="login-page-link-wrapper">
              <span>Don&lsquo;t have an account yet?</span>
              <a href="/register" className="register-page-link">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
