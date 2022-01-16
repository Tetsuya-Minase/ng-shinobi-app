import {NgModule} from '@angular/core';
import {CharacterListComponent} from './character-list.component';
import {CommonModule} from '@angular/common';
import {CharacterListRouteModule} from './character-list-route.module';
import {CharacterListService} from './services/character-list.service';
import {CharacterListItemModule} from "./components/character-list-item/character-list-item.module";
import {ButtonModule} from "../../components/button/button.module";

@NgModule({
  imports: [CommonModule, CharacterListRouteModule, CharacterListItemModule, ButtonModule],
  declarations: [CharacterListComponent],
  providers: [CharacterListService],
})
export class CharacterListModule {
}
