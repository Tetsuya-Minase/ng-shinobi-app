import { createAction, props } from '@ngrx/store';
import { CharacterDetail } from '../../../model/CharacterListState';

export const fetchCharacter = createAction('CHARACTER_LIST_FETCH_CHARACTER');
export const fetchSuccess = createAction('CHARACTER_LIST_FETCH_SUCCESS', props<{ data: ReadonlyArray<CharacterDetail> }>());
export type CharacterListActions = typeof fetchCharacter;
