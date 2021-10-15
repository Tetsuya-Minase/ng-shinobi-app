import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { CharacterListState } from '../../model/CharacterListState';
import { Observable } from 'rxjs';
import { fetchCharacter } from './services/character-list.actions';

@Component({
  selector: 'ng-shinobi-app-character-list-page',
  templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.scss']
})

export class CharacterListComponent implements OnInit {
  public characterDetail$: Observable<CharacterListState>;

  constructor(private readonly store: Store<{ characterList: CharacterListState }>) {
    this.characterDetail$ = this.store.select(createSelector(
      createFeatureSelector('characterList'),
      (state: CharacterListState) => state
    ));
  }

  ngOnInit() {
    this.store.dispatch(fetchCharacter());
  }

  public fetch() {
    this.store.dispatch(fetchCharacter());
  }
}
