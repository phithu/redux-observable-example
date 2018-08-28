import { actions as ActionsType } from './actions';
import { ofType } from 'redux-observable';
import {
  switchMap,
  map,
  catchError,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import ProductService from '../../component/service';

let currentAction = null; // to save current action

const handleError = (error) => {
  return of({
    type: ActionsType.FETCH_FAILURE,
    payload: { error },
  });
};

export const syncProducts$ = (action$) => action$.pipe(
  ofType(ActionsType.SYNC_PRODUCTS),
  tap(action => currentAction = action),
  switchMap(() => ProductService.fetchGetProducts()),
  map((response) => {
      return {
        type: ActionsType.SYNC_PRODUCTS_SUCCESS,
        payload: {
          data: [...response.data],
        },
      };
    },
  ),
  catchError((error) => handleError(error)),
);

export const getProducts$ = (action$) => action$.pipe(
  ofType(ActionsType.GET_PRODUCTS),
  tap(action => currentAction = action),
  switchMap(() => ProductService.fetchGetProducts()),
  map((response) => {
      return {
        type: ActionsType.GET_PRODUCTS_SUCCESS,
        payload: {
          data: [...response.data],
        },
      };
    },
  ),
  catchError((error) => handleError(error)),
);

export const deleteProduct$ = (action$) => action$.pipe(
  ofType(ActionsType.DELETE_PRODUCT),
  tap(action => currentAction = action),
  switchMap((action) => ProductService.fetchDeleteProduct(action.payload.id)),
  map(() => {
      return {
        type: ActionsType.DELETE_PRODUCT_SUCCESS,
        payload: { data: currentAction.payload.id },
      };
    },
  ),
  catchError((error) => handleError(error)),
);