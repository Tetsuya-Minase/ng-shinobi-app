import { NgModule } from '@angular/core';
import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import { CharacterListRouteModule } from './character-list-route.module';

@NgModule({
  imports: [CommonModule, CharacterListRouteModule],
  declarations: [CharacterListComponent],
  providers: []
})
export class CharacterListModule {
}

