import { createReducer, on } from '@ngrx/store';
import { CharacterListActions, fetchSuccess } from './character-list.actions';
import { CharacterDetail } from '../../../model/CharacterListState';

export const initialState: CharacterDetail[] = [{
  userId: '',
  playerName: '',
  name: '',
  kana: '',
  regulation: '',
  type: '',
  ryuha: '',
  kairyuha: '',
  ryugi: '',
  enemy: '',
  rank: '',
  achievement: '',
  age: '',
  gender: '',
  face: '',
  belief: '',
  hyorogan: 0,
  jintugan: 0,
  tonkohu: 0
}];

const _CharacterListReducer = createReducer(
  initialState,
  on(fetchSuccess, (state, action) => action.data)
);

export function CharacterListReducer(state: CharacterDetail[], action: CharacterListActions) {
  return _CharacterListReducer(state, action);
}
