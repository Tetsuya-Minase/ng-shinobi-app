import { createReducer, on } from '@ngrx/store';
import { CharacterListActions, fetchCharacterListSuccess } from './character-list.actions';
import { CharacterListState } from '../../../model/CharacterListState';

export const initialState: CharacterListState = {
  list: [],
};

const _CharacterListReducer = createReducer(
  initialState,
  on(fetchCharacterListSuccess, (state, action): CharacterListState => ({ ...state, list: action.data }))
);

export function CharacterListReducer(state: CharacterListState, action: CharacterListActions) {
  return _CharacterListReducer(state, action);
}
