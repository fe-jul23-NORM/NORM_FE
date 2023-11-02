import React, { useState, useEffect } from 'react';
import './GlobalSearch.scss';
import { useAppDispatch } from '../../store';
import { getFoundProductsThunk } from '../../store/products/thunks';
import { useSelector } from 'react-redux';
import { selectGlobalSearchProducts } from '../../store/products/selectors';
import { BASE_URI } from '../../constants/core';
import { PrimeReactProvider } from 'primereact/api';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from "primereact/autocomplete";
import { Product } from '../../types/product.types';
import { useNavigate } from 'react-router';

export const GlobalSearch: React.FC = () => {
  const [value, setValue] = useState({ name: '' });

  const dispatch = useAppDispatch();
  const products = useSelector(selectGlobalSearchProducts);

  const handleChange = (event: AutoCompleteCompleteEvent) => {
    event.originalEvent.preventDefault();
    setValue({ name: event.query })
  };

  const handleOnHide = () => {
    setValue({ name: '' })
  }

  useEffect(() => {
    dispatch(getFoundProductsThunk(value.name));
  }, [value]);

  const itemTemplate = (item: Product) => {
    return (
      <div className="search-item">
        <img
          className='item-img'
          alt={item.name}
          src={`${BASE_URI}/${item.image}`}
          style={{ width: '18px' }}
        />
        <div className='item-name' title={item.name}>{item.name}</div>
      </div>
    );
  };

  const navigate = useNavigate();

  const handleSelectItem = (event: AutoCompleteSelectEvent) => {
    event.originalEvent?.preventDefault();
    setValue({ name: '' });
    const item = event.value;
    navigate(`/products/${item.itemId}`);
  }

  return (
    <div className="search-container">
      <PrimeReactProvider value={{ unstyled: true }}>
        <AutoComplete 
          field="name" 
          value={value}   
          suggestions={products} 
          completeMethod={handleChange} 
          onSelect={handleSelectItem} 
          placeholder="Search"
          itemTemplate={itemTemplate}
          onHide={handleOnHide}
          delay={200}
        />
      </PrimeReactProvider>
    </div>
  )
};
