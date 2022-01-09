import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './pages/top/top.component';

const Routes: Routes = [
  {
    path: 'character-list',
    loadChildren: () => import('./pages/character-list/character-list.module').then((m) => m.CharacterListModule),
  },
  { path: '', component: TopComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
