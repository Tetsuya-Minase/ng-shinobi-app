import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { CharacterDetail } from '../../../model/CharacterListState';

@Injectable()
export class CharacterListService {
  constructor(private readonly httpService: HttpService) {
  }

  public fetchCharacterList() {
    return this.httpService.fetch<CharacterDetail[]>('htps://test/v1/character');
  }
}
