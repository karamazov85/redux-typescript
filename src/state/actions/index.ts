import { ActionType } from './../action-types/index';

interface FetchingBeers {
    type: ActionType.FETCHING_BEERS;
}

interface FetchingBeersSuccess {
    type: ActionType.FETCHING_BEERS_SUCCESS;
    payload: object[]
}

interface FetchingBeersError {
    type: ActionType.FETCHING_BEERS_ERROR;
    payload: string;
}

export type Action = FetchingBeers | FetchingBeersSuccess | FetchingBeersError