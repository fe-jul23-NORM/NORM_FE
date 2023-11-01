import React, { ChangeEvent, memo, useCallback, useId, useState } from 'react';
import cn from 'classnames';
import './Input.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type Props = {
  name: string,
  placeholder: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  isSecure?: boolean,
  label?: string,
  error?: string,
  isInvalid?: boolean,
  disabled?: boolean,
}

const Input: React.FC<Props> = ({ name, placeholder, onChange, value, error, isInvalid, label, isSecure, disabled }) => {
  const [show, setShow] = useState(false);
  const [touched, setTouched] = useState(false);
  const showError = error && touched;
  const id = useId();
  
  const handleBlur = () => {
    setTouched(true);
  }
  
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setTouched(true);
  }, []);
  
  const toggleShow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShow(!show);
  }
  
  return (
    <div className='input-wrapper'>
      {label && (
        <label htmlFor={id} className='input-label'>{label as string}</label>
      )}
      <div className='input-holder'>
        <input
          id={id}
          name={name}
          className={cn(
            'input-elem',
            isInvalid && touched && 'input-elem--invalid',
            isSecure && 'input-elem--secure',
          )}
          disabled={disabled}
          value={value}
          type={isSecure ? show ? 'text' : 'password' : 'text'}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder as string || 'Enter something'}
        />
        {isSecure && (
          <span
            className={cn('input-secure-icon',{
              'icon-show': show,
              'icon-hide': !show,
            })}
            onClick={toggleShow}
          />
        )}
      </div>
      {showError && <ErrorMessage text={error}/>}
    </div>
  );
};

export default memo(Input);
