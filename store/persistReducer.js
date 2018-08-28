import { persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import rootReducer from '../redux/reducers';
import FilesystemStorage from 'redux-persist-filesystem-storage';

const config = {
  key: 'root',
  // storage: storage,
  storage: FilesystemStorage,
  whitelist: ['product'],
  transforms: [immutableTransform()],
};

const PersistReducer = persistReducer(config, rootReducer);
export default PersistReducer;

