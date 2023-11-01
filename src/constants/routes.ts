export const PRODUCT_ROUTES = {
  GET: '/products',
  GET_NEW: '/products/new',
  GET_DISCOUNT: '/products/discount',
  GET_CATEGORY_COUNT: '/products/get-category-count',
  GET_BY_NAME: '/products/get-by-name',
  GET_FAVOURITES: '/products/favorites',
  ADD_TO_FAVOURITES: '/products/add-to-favorite',
  REMOVE_FROM_FAVORITES: '/products/remove-from-favorite',
}

export const ORDER_ROUTES = {
  CREATE_BY_USER: '/order/user-create',
  CREATE_BY_GUEST: '/order/guest-create',
  GET: '/order/get',
};

export const AUTH_ROUTES = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
}
