import {
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable';
import {
  deleteProduct$,
  getProducts$,
  syncProducts$,
} from './product/epics';

export const rootEpic = combineEpics(
  getProducts$,
  deleteProduct$,
  syncProducts$,
);

const epicMiddleware = createEpicMiddleware();

export default epicMiddleware;
