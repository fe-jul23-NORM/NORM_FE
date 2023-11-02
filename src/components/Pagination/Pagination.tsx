import classNames from "classnames";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getSearchWith } from "../../utils/searchHelper";
import './Pagination.scss';
import { scrollToTop } from "../../utils/constants";

type Props = {
  total: number,
  perPage: number,
  page: string,
}

const Pagination: React.FC<Props> = (props: Props) => {
  const {
    total,
    perPage,
    page,
  } = props;

  const [paginationStart, setPaginationStart] = useState(0);
  const [paginationEnd, setPaginationEnd] = useState(6);
  const [searchParams] = useSearchParams();

  const pagesCount = Math.ceil(total / +perPage);

  const pageItems = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pageItems.push(i);
  }

  const paginationHandleNext = (el: number) => {
    if (el + 5 >= total / perPage) {
      setPaginationStart((total / perPage) - 5);
      setPaginationEnd((total / perPage) + 1);
    } else {
      setPaginationStart(el - 1);
      setPaginationEnd(el + 5);
    }
  };

  const paginationHandlePrev = (el: number) => {
    if (el <= 5) {
      setPaginationStart(0);
      setPaginationEnd(6);
    } else {
      setPaginationStart(el - 6);
      setPaginationEnd(el);
    }
  };

  const onNext = (el: string) => {
    return getSearchParams(String(+el + 1));
  };

  const onPrev = (el: string) => {
    return getSearchParams(String(+el - 1));
  };

  const preparedPageItems = pageItems.slice(paginationStart, paginationEnd);


  const getSearchParams = (params: string) => {
    return getSearchWith(searchParams, {
      'page': params,
    });
  };

  const handleNextPage = (el: number) => {
    paginationHandleNext(el);
    scrollToTop();
  };

  const handlePrevPage = (page: number) => {
    paginationHandlePrev(page);
    scrollToTop();
  };

  return (
    <section className="pagination">
      <Link
        to={{ search: onPrev(page) }}
        onClick={() => handlePrevPage(+page)}
        className={classNames(
          'pagination__button',
          { 'pagination__button--disabled': +page === 1 },
        )}
      >
        <span className="icon-left" aria-hidden="true"></span>
      </Link>

      <ul className="pagination__list">
        {preparedPageItems.map((el) => (

          <Link
            key={el}
            to={{
              search: getSearchParams(String(el)),
            }}
            onClick={() => handleNextPage(el)}
            className={classNames(
              'pagination__item',
              { 'pagination__item--active': el === +page },
            )}
          >
            {el}
          </Link>
        ))}
      </ul>

      <Link
        to={{ search: onNext(page) }}
        onClick={() => handleNextPage(+page)}
        className={classNames(
          'pagination__button',
          {
            'pagination__button--disabled':
              +page === Math.ceil(total / perPage),
          },
        )}
      >
        <span className="icon-right" aria-hidden="true"></span>
      </Link>
    </section>
  );
}

export default Pagination;
