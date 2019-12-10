import {
  createAction,
  props,
  Action,
  createReducer,
  on,
  createSelector
} from '@ngrx/store';

/**
 * Actions
 */
export const toggleLang = createAction('[Lang Service] Toggle Lang');

/**
 * Reducers
 */
export interface State {
  showSanskrit: boolean;
}
const initialState = { showSanskrit: false } as State;

export const langFeatureKey = 'lang';

const langReducer = createReducer(
  initialState,
  on(toggleLang, state => ({ showSanskrit: !state.showSanskrit }))
);

export function reducer(state: State | undefined, action: Action) {
  return langReducer(state, action);
}

export const selectShowSanskrit = (state: State) => state.showSanskrit;

/**
 * Selectors
 */
