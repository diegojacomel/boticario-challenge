
  
/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import cashbackReducer from './cashback/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    cashbackReducer: cashbackReducer,
})

export default rootReducers;