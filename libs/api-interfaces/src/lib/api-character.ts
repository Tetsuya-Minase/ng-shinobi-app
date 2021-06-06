import { DeepReadonly } from './extention-types';

interface _CharacterListResponse {
  start: number;
  total: number;
  result: ReadonlyArray<{
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
    hyorogan: number;
    jintugan: number;
    tonkohu: number;
  }>;
}

export type CharacterListResponse = DeepReadonly<_CharacterListResponse>;
