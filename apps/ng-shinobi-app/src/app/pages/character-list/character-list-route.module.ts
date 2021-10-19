import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list.component';
import { NgModule } from '@angular/core';

const ListRoute: Routes = [
  { path: '', component: CharacterListComponent }
]

@NgModule({
  imports: [RouterModule.forChild(ListRoute)],
  exports: [RouterModule]
})
export class CharacterListRouteModule {
}


