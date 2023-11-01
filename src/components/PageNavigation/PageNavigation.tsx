import React from "react";
import './PageNavigation.scss'
import { normalizeQuery } from "../../utils/functions";
import { NavLink } from "react-router-dom";

type NavigationPrpos = {
  link: string,
  text: string,
};

type Props = {
  productsType?: string;
  productName?: string;
  links?: NavigationPrpos[],
}


const PageNavigation: React.FC<Props> = ({ links }) => {
  return (
    <div className="catalog__nav">
      <NavLink to="/" className="catalog__nav-icon">
        <span className="icon-home" aria-hidden="true"></span>
      </NavLink>

      {links?.map(link => {
        return (
          <>
            <span className="icon-right" aria-hidden="true"></span>
            <NavLink to={link.link} className="catalog__nav-text">
              {normalizeQuery(link.text)}
            </NavLink>
          </>
        )
      })}
    </div>
  );
};

export default PageNavigation;