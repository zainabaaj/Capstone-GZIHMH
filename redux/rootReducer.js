import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import isanonReducer from './isanonReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    courses: persistReducer(persistConfig, reducer),
    isAnonymous: persistReducer(persistConfig, isanonReducer),
});

export default rootReducer;