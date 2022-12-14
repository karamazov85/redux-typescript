import { ActionType } from '../action-types'
import { Action } from '../actions'
import { Beer } from '../../types-defs/beer-type-def'

interface BeerState {
    loading: boolean
    beers: Beer[]
    error: string | null
}

// initial state for the first loading of the state
const initialState = {
    loading: false,
    beers: [],
    error: null
}


export const beersReducer = (state: BeerState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCHING_BEERS:
            return { loading: true, beers:[], error: null };
        case ActionType.FETCHING_BEERS_SUCCESS:
            return { loading: false, beers: action.payload, error: null };
        case ActionType.FETCHING_BEERS_ERROR:
            return { loading: false, beers:[], error: action.payload }
        default: 
            return state;
    }
}