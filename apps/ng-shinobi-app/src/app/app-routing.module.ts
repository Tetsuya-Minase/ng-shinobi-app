import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const Routes: Routes = [
  { path: 'character-list', loadChildren: () => import('./pages/character-list/character-list.module').then(m => m.CharacterListModule) },
  { path: '', loadChildren: () => import('./pages/character-list/character-list.module').then(m => m.CharacterListModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
