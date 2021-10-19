import { Injectable } from '@angular/core';
import { CharacterListService } from './character-list.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { fetchCharacterList, fetchCharacterListSuccess } from './character-list.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class CharacterListEffects {
  constructor(private readonly actions$: Actions, private readonly characterListService: CharacterListService) {}

  private readonly fetchCharacterList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCharacterList),
      switchMap((param) =>
        this.characterListService.fetchCharacterList(param).pipe(
          map((response) => fetchCharacterListSuccess({ data: response.result })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
