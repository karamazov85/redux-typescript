import { beersReducer } from './beersReducer'; 
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    beers: beersReducer
})
// we need to tell TS explicitly what RootType the state will have.
// ReturnType will return the the type that's in between the < > -
// for example: ReturnType<() => string> --> the return type will be string. 
// in this case, we tell ReturnType to return a type that mimics our reducers' type sturcture exactly.
export type RootState = ReturnType<typeof reducers>