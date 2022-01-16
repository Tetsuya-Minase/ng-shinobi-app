import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { CharacterListResponse } from '@ng-shinobi-app/api-interfaces';
import { FetchCharacterListParams } from '../types/character-list.types';

@Injectable()
export class CharacterListService {
  constructor(private readonly httpService: HttpService) {}

  public fetchCharacterList({ start, results }: FetchCharacterListParams) {
    return this.httpService.fetch<CharacterListResponse>(
      'http://localhost:3333/api/v1/character',
      new Map([
        ['start', start.toString()],
        ['results', results.toString()],
      ])
    );
  }
}
