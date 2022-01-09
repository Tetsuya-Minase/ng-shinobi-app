import { NgModule } from '@angular/core';
import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import { CharacterListRouteModule } from './character-list-route.module';
import { CharacterListService } from './services/character-list.service';

@NgModule({
  imports: [CommonModule, CharacterListRouteModule],
  declarations: [CharacterListComponent],
  providers: [CharacterListService],
})
export class CharacterListModule {}
