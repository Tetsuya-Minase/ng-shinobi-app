import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { CharacterListResponse } from '@ng-shinobi-app/api-interfaces';

@Injectable()
export class CharacterListService {
  constructor(private readonly httpService: HttpService) {
  }

  public fetchCharacterList() {
    return this.httpService.fetch<CharacterListResponse>('http://localhost:3000/v1/character');
  }
}
