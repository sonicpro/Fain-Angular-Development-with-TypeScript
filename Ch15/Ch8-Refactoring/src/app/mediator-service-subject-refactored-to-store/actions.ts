import { Action } from "@ngrx/store";

// Action types.
export const SEARCH = "[Product] search";
export const SEARCH_SUCCESS = "[Product] search success";

export class SearchAction implements Action {
    readonly type = SEARCH; // The property for the discriminated union.

    constructor(public payload: {searchQuery: string}) {}
}

export class SearchSuccessAction implements Action {
    readonly type = SEARCH_SUCCESS;

    constructor(public payload: {searchResults: string[]}) {}
}

export type SearchActions = SearchAction | SearchSuccessAction;