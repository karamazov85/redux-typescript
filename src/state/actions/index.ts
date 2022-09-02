import { ActionType } from './../action-types/index';
import { Beer } from '../../types-defs/beer-type-def'

interface FetchingBeers {
    type: ActionType.FETCHING_BEERS;
}

interface FetchingBeersSuccess {
    type: ActionType.FETCHING_BEERS_SUCCESS;
    payload: Beer[]
}

interface FetchingBeersError {
    type: ActionType.FETCHING_BEERS_ERROR;
    payload: string;
}

export type Action = FetchingBeers | FetchingBeersSuccess | FetchingBeersError