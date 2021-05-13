import { Injectable } from '@angular/core';
import { CharacterListService } from './character-list.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { fetchCharacter, fetchSuccess } from './character-list.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class CharacterListEffects {
  constructor(private readonly actions$: Actions, private readonly characterListService: CharacterListService) {
  }

  private readonly loadCharacterList$ = createEffect(
    () => this.actions$.pipe(
      ofType(fetchCharacter),
      switchMap(() => this.characterListService.fetchCharacterList()
        .pipe(
          map(response => fetchSuccess({ data: response.result })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
