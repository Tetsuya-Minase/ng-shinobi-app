import { createAction, props } from '@ngrx/store';
import { CharacterDetail } from '../../../model/CharacterListState';
import { DeepReadonly } from '@ng-shinobi-app/extension';

export const fetchCharacterList = createAction(
  'CHARACTER_LIST/FETCH_CHARACTER_LIST',
  props<DeepReadonly<{ start: number; results: number }>>()
);
export const fetchCharacterListSuccess = createAction(
  'CHARACTER_LIST/FETCH_CHARACTER_LIST_SUCCESS',
  props<{ data: ReadonlyArray<CharacterDetail> }>()
);
export type CharacterListActions = ReturnType<typeof fetchCharacterList | typeof fetchCharacterListSuccess>;
