import React from "react";
import './PageNavigation.scss'

type Props = {
  productsType: string;
  productName?: string;
}


const PageNavigation: React.FC<Props> = ({ productsType, productName }) => {
  return (
    <div className="catalog__nav">
      <a href="/" className="catalog__nav-icon">
        <span className="icon-home" aria-hidden="true"></span>
      </a>
      <span className="icon-right" aria-hidden="true"></span>

      <a href={`/${productsType}`} className="catalog__nav-text">
        {productsType}
      </a>

      {productName && (
        <>
          <span className="icon-right" aria-hidden="true"></span>

          <a href="/" className="catalog__nav-text">
            {productName}
          </a>
        </>
      )}
    </div>
  );
};

export default PageNavigation;