import { Controller, Get } from '@nestjs/common';

import {CharacterListResponse, Message} from '@ng-shinobi-app/api-interfaces';

import { AppService } from './app.service';

@Controller('/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
  @Get('character')
  public getCharacter(): CharacterListResponse {
    return {
      start: 1,
      total: 10,
      result: [
        {
          userId: 'hoge',
          playerName: 'hoge',
          name: 'hoge',
          kana: 'hoge',
          regulation: 'hoge',
          type: 'hoge',
          ryuha: 'hoge',
          kairyuha: 'hoge',
          ryugi: 'hoge',
          enemy: 'hoge',
          rank: 'hoge',
          achievement: 'hoge',
          age: 'hoge',
          gender: 'hoge',
          face: 'hoge',
          belief: 'hoge',
          hyorogan: 100,
          jintugan: 10,
          tonkohu: 100,
        }
      ]
    }
  }
}
