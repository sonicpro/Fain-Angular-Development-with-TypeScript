import { SearchActions, SEARCH, SEARCH_SUCCESS } from "./actions";
import { State } from "./istate"

const initialState: State = {
    searchQuery: "",
    searchResults: []
}

// Reducer is a function, not a class.
export function reducer(state = initialState,
    action:SearchActions): State {  // The action is dispatched by either SearchComponent or by SearchEffects class.
    switch (action.type) {
        case  SEARCH:
            return {
                searchQuery: action.payload.searchQuery, // from SeachComponent.
                searchResults: []
            };
        case SEARCH_SUCCESS:
            return {
                ...state, // Using spread to create the object literal.
                searchResults: action.payload.searchResults // Overwrite the previous state searchResults by the one from SearchEffects.
            };
        default:
            return state;
    }
}