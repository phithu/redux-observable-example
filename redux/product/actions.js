export const actions = {
  GET_PRODUCTS: '@PRODUCT/GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: '@PRODUCT/GET_PRODUCTS_SUCCESS',
  FETCH_FAILURE: '@PRODUCT/FETCH_FAILURE',
  DELETE_PRODUCT: '@PRODUCT/DELETE_PRODUCT',
  DELETE_PRODUCT_SUCCESS: '@PRODUCT/DELETE_PRODUCT_SUCCESS',
  SYNC_PRODUCTS: '@PRODUCT/SYNC_PRODUCTS',
  SYNC_PRODUCTS_SUCCESS: '@PRODUCT/SYNC_PRODUCTS_SUCCESS',

  getProducts: () => {
    return {
      type: actions.GET_PRODUCTS,
    };
  },

  getProductsSuccess: (data) => {
    return {
      type: actions.GET_PRODUCTS_SUCCESS,
      payload: { data },
    };
  },

  deleteProduct: (id) => {
    return {
      type: actions.DELETE_PRODUCT,
      payload: {
        id,
      },
    };
  },

  syncProductsSuccess: (data) => {
    return {
      type: actions.SYNC_PRODUCTS_SUCCESS,
      payload: { data },
    };
  },

  syncProducts: () => {
    return {
      type: actions.SYNC_PRODUCTS,
    };
  },

  deleteProductSuccess: (id) => {
    return {
      type: actions.DELETE_PRODUCT_SUCCESS,
      payload: {
        id,
      },
    };
  },

  fetchFailure: (error) => {
    return {
      type: actions.FETCH_FAILURE,
      payload: { error },
    };
  },
};