import { ActionType } from '../action-types'
import { Action } from "../actions";
import { Dispatch } from 'redux' // type definition

interface Beer {
    name: string 
}

export const fetchBeers = () => {

    // thunk for async fetching - pass in the dispatch func with Dispatch type
    return async (dispatch: Dispatch<Action>) => {
        //set loading to true
        dispatch({ 
            type: ActionType.FETCHING_BEERS 
        })

        try {
            const response = await fetch(`https://api.punkapi.com/v2/beers`)
            const beerJson = await response.json();
            const beerNames = beerJson.map((beer: Beer) => beer.name)

            // dispatch beerNames to store
            dispatch({ 
                type: ActionType.FETCHING_BEERS_SUCCESS, payload: beerNames
            })

        } catch (error) {
            if (error instanceof Error) {
                dispatch({ 
                    type: ActionType.FETCHING_BEERS_ERROR, 
                    payload: error.message
                })
            }
        }
    }
}