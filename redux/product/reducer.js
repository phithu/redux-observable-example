import { actions } from './actions';

const initialState = {
  isLoading: false,
  error: null,
  entities: null,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case actions.GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };

    case actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entities: action.payload.data,
      };

    case actions.SYNC_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };

    case actions.SYNC_PRODUCTS_SUCCESS:
      return {
        ...state,
        entities: action.payload.data,
        isLoading: false,
      };

    case actions.FETCH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };

    default:
      return state;
  }
}