// Selectors to obtain the slices of the app state.
// Used in EbayComponent and AmazonComponent.

import { State } from "./istate";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getState = createFeatureSelector<State>("myReducer"); // Takes name of the reducer defined in the app.module.ts.

export const getSearchQuery = createSelector(getState, state => state.searchQuery);
export const getSearchResults = createSelector(getState, state => state.searchResults);