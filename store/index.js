import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  persistStore,
} from 'redux-persist';
import { logger } from 'redux-logger';
import PersistReducer from './persistReducer';
import EpicMiddleware, { rootEpic } from '../redux/epics';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const Store = createStore(PersistReducer, applyMiddleware(logger,
  EpicMiddleware));

EpicMiddleware.run(rootEpic);

export const PersisStore = persistStore(Store);

