import React, { useState, useEffect } from 'react';
import './GlobalSearch.scss';
import { useAppDispatch } from '../../store';
import { getFoundProductsThunk } from '../../store/products/thunks';
import { useSelector } from 'react-redux';
import { selectGlobalSearchProducts } from '../../store/products/selectors';
import { AutoComplete } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { ItemDataType } from 'rsuite/esm/@types/common';
import { BASE_URI } from '../../constants/core';

const GlobalSearch: React.FC = () => {
  const [value, setValue] = useState({
    name: '',
  });

  const dispatch = useAppDispatch();
  const products = useSelector(selectGlobalSearchProducts);

  const handleChange = (value: string) => {
    const searchStr = value;

    if (value) {
      const delay = setTimeout(() => {
        setValue(() => {
          return {
            name: searchStr,
          }
        })
    });
    
    return () => clearTimeout(delay);
    }
  };

  useEffect(() => {
    dispatch(getFoundProductsThunk(value.name));    
  }, [value]);

  const productCards: ItemDataType[] = products.slice(0, 5).map(product => {
    return ({
      value: product.name, 
      label: product.name, 
      product: product
    });
  })

  return (
    <div className="search-container">
      <AutoComplete
        placeholder="Search ..."
        data={productCards}
        onChange={handleChange}
        style={{ width: 224 }}
        renderMenuItem={(item, itemData) => {
        return (
          <div className='search-item'>
            <span>
              <img 
                src={`${BASE_URI}/${itemData.product.image}`} 
                className="img-mini"
              />
            </span>

            <span>
              {item}
            </span> 
          </div>
        );
        }}
      />
    </div>
  )
};

export default memo(GlobalSearch);
