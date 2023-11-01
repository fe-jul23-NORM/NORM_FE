import React, { useState, useEffect, memo } from 'react';
import './GlobalSearch.scss';
import { useAppDispatch } from '../../store';
import { getFoundProductsThunk } from '../../store/products/thunks';
import { useSelector } from 'react-redux';
import { selectGlobalSearchProducts } from '../../store/products/selectors';
import { BASE_URI } from '../../constants/core';
import { PrimeReactProvider } from 'primereact/api';
import { AutoComplete } from "primereact/autocomplete";
import { Product } from '../../types/product.types';

const GlobalSearch: React.FC = () => {
  const [value, setValue] = useState({
    name: '',
  });

  const dispatch = useAppDispatch();
  const products = useSelector(selectGlobalSearchProducts);
  const handleChange = (value: string) => {
    const searchStr = value;

    if (searchStr) {
      setValue(() => {
        return {
          name: searchStr,
        }
      })
    }
  };

  useEffect(() => {
    console.log('use effect');
    const delay = setTimeout(() => {
      console.log('dispatch');
      dispatch(getFoundProductsThunk(value.name));  
    });  
    return () => clearTimeout(delay);
  }, [value]);

  const itemTemplate = (item: Product) => {
    return (
        <div className="search-item">
            <img
                alt={item.name}
                src={`${BASE_URI}/${item.image}`}
                
                style={{width: '18px'}}
            />
            <div>{item.name}</div>
        </div>
      );
    };

    return (
      <PrimeReactProvider value={{ unstyled: true }}>
        <div className="search-container">
          <AutoComplete field="name" 
            value={value}   
            suggestions={products} 
            completeMethod={(event => (handleChange(event.query)))} 
            //onChange={(e) => setSelectedCountry(e.value)} 
            placeholder="Search ..."
            itemTemplate={itemTemplate}
          />
        </div>
    </PrimeReactProvider>
  )
};

export default memo(GlobalSearch);
