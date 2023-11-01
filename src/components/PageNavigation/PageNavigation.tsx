import React from "react";
import './PageNavigation.scss'
import { normalizeQuery } from "../../utils/functions";

type NavigationPrpos = {
  link: string,
  text: string,
};

type Props = {
  productsType?: string;
  productName?: string;
  links?: NavigationPrpos[],
}


const PageNavigation: React.FC<Props> = ({ productsType, productName, links }) => {
  return (
    <div className="catalog__nav">
      <a href="/" className="catalog__nav-icon">
        <span className="icon-home" aria-hidden="true"></span>
      </a>

      {links?.map(link => {
        return (
          <>
            <span className="icon-right" aria-hidden="true"></span>
            <a href={link.link} className="catalog__nav-text">
              {normalizeQuery(link.text)}
            </a>
          </>
        )
      })}
      {/* <span className="icon-right" aria-hidden="true"></span>

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
      )} */}
    </div>
  );
};

export default PageNavigation;