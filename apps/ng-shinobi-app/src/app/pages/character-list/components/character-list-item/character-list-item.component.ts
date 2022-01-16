import {Component, Input} from '@angular/core';
import {CharacterDetail} from "../../../../model/CharacterListState";

@Component({
  selector: 'ng-shinobi-app-character-list-item',
  templateUrl: 'character-list-item.component.html',
  styleUrls: ['character-list-item.component.scss']
})

export class CharacterListItemComponent {
  @Input() public character: CharacterDetail;
}
