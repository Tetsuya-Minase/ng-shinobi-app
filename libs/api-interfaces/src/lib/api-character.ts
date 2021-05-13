export interface CharacterListResponse {
  readonly start: number;
  readonly total: number;
  readonly result: Array<{
    readonly userId: string;
    readonly playerName: string;
    readonly name: string;
    readonly kana: string;
    readonly regulation: string;
    readonly type: string;
    readonly ryuha: string;
    readonly kairyuha: string;
    readonly ryugi: string;
    readonly enemy: string;
    readonly rank: string;
    readonly achievement: string;
    readonly age: string;
    readonly gender: string;
    readonly face: string;
    readonly belief: string;
  }>;
}
