import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import {CharacterDetail, CharacterListState} from '../../model/CharacterListState';
import { Observable } from 'rxjs';
import { fetchCharacterList } from './services/character-list.actions';
import {map} from "rxjs/operators";

@Component({
  selector: 'ng-shinobi-app-character-list-page',
  templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  private readonly fetchCharacters: (start: number) => ReturnType<typeof fetchCharacterList>;
  public characterDetailList$: Observable<ReadonlyArray<CharacterDetail>>;

  constructor(private readonly store: Store<{ characterList: CharacterListState }>) {
    this.characterDetailList$ = this.store.select(
      createSelector(createFeatureSelector('characterList'), (state: CharacterListState) => state)
    ).pipe(map(state => state.list));
    this.fetchCharacters = (start: number) => fetchCharacterList({ start, results: 10 });
  }

  public ngOnInit() {
    this.store.dispatch(this.fetchCharacters(1));
  }

  public fetchCharacterList() {
    this.store.dispatch(this.fetchCharacters(1));
  }
}
