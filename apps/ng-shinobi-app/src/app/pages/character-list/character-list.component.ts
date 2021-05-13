import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterDetail } from '../../model/CharacterListState';
import { Observable } from 'rxjs';
import { fetchCharacter } from './services/character-list.actions';

@Component({
  selector: 'ng-shinobi-app-character-list-page',
  templateUrl: 'character-list.component.html'
})

export class CharacterListComponent implements OnInit {
  public characterDetail$: Observable<CharacterDetail[]> = this.store.select(state => state.characterList);

  constructor(private readonly store: Store<{characterList: CharacterDetail[]}>) {
  }

  ngOnInit() {
    this.store.dispatch(fetchCharacter());
  }

  public fetch() {
    this.store.dispatch(fetchCharacter());
  }
}
