import { beersReducer } from './beersReducer'; 
import { combineReducers } from 'redux';

const reducers = combineReducers({
    beers: beersReducer
})

export default reducers;