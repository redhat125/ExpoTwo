import { combineReducers } from 'redux';
import dataReducer from './dataReducer.js';
import locReducer from './locReducer.js';
import vendorReducer from './vendorReducer.js';

const rootReducer = combineReducers({
    dataReducer,
    locReducer,
    vendorReducer
});

export default rootReducer;