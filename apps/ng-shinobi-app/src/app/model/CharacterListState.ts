import { DeepReadonly } from '../../../../../libs/api-interfaces/src/lib/extention-types';

interface _CharacterDetail {
  userId: string;
  playerName: string;
  name: string;
  kana: string;
  regulation: string;
  type: string;
  ryuha: string;
  kairyuha: string;
  ryugi: string;
  enemy: string;
  rank: string;
  achievement: string;
  age: string;
  gender: string;
  face: string;
  belief: string;
  // readonly selectedSkillList: GridData[];
  // readonly displayArtsArray: ArtsData[];
  // readonly background: BackGround[];
  // readonly secrets: SecretsData[];
  hyorogan: number;
  jintugan: number;
  tonkohu: number;
}

export type CharacterDetail = DeepReadonly<_CharacterDetail>;

export interface CharacterListState {
  readonly list: ReadonlyArray<CharacterDetail>;
}
