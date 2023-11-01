import React, { RefObject, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './Dropdown.scss'
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

export type Props = {
  label: string,
  classModificator: string,
  options: string[],
  startValue: string,
  searchParamsKey: string,
};

export function useOutsideClick(ref: RefObject<HTMLElement>, func: () => void, spectate: any = null): void {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        func();
      }
    }
    
    document.addEventListener('mousedown', handleClick);
    
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, spectate]);
}

export const Dropdown: React.FC<Props> = ({
  label,
  classModificator,
  options,
  startValue,
  searchParamsKey,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(startValue);
  const menuRef = useRef<HTMLDivElement>(null);


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(menuRef, () => setIsOpen(false));

  const handleChangeValue = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  const getSearchParams = (params: string) => {
    if (searchParamsKey === 'itemsOnPage') {
      return getSearchWith(searchParams, {
        [searchParamsKey]: params,
      });
    }

    return getSearchWith(searchParams, {
      [searchParamsKey]: params.toLowerCase(),
    });
  };

  return (
    <div ref={menuRef} className={`dropdown dropdown_${classModificator}`}>
      <label
        htmlFor="dropdownSelect"
        className="dropdown__label"
      >
        {label}
      </label>
      <button
        id="dropdownSelect"
        type="button"
        className="dropdown__select"
        onClick={toggle}
      >
        <span>{value}</span>
        <div
          className={classNames(
            'dropdown__arrow',
            { dropdown__arrow_opened: isOpen },
          )}
        />
      </button>

      {isOpen && (
        <ul className="dropdown__list">
          {options.map(option => (
            <li
              key={option}
              className="dropdown__item"
              onClick={() => handleChangeValue(option)}
            >
              <Link
                to={{
                  search: getSearchParams(option),
                }}
                onClick={toggle}
                className={classNames(
                  'dropdown__link',
                  { 'dropdown__link--active': option === value },
                )}
              >
                {option}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};