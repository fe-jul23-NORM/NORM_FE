import React, { useState, useCallback, memo } from 'react';
import './GlobalSearch.scss';
import Input from '../Input/Input';
import { useAppDispatch } from '../../store';
import { getFoundProductsThunk } from '../../store/products/thunks';
import { useSelector } from 'react-redux';
import { selectGlobalSearchProducts } from '../../store/products/selectors';

const GlobalSearch: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
  });

  const dispatch = useAppDispatch();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const searchStr = e.target.value;
    if (searchStr?.length) {
      dispatch(getFoundProductsThunk(searchStr));
    }
    setValues(() => {
      return {
        [e.target.name]: searchStr,
      }
    })
  }, []);

  const products = useSelector(selectGlobalSearchProducts);

  console.log(`Products: ${JSON.stringify(products)}`);
  
  return (
    <div className="search-container">
      <Input
        name="search"
        placeholder="Search ..."
        onChange={handleChange}
        value={values.name}
      />
    </div>
  )
};

export default memo(GlobalSearch);
