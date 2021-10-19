import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TopModule } from './pages/top/top.module';
import { CharacterListModule } from './pages/character-list/character-list.module';
import { StoreModule } from '@ngrx/store';
import { CharacterListReducer } from './pages/character-list/services/character-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharacterListEffects } from './pages/character-list/services/character-list.effects';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TopModule,
    CharacterListModule,
    StoreModule.forRoot({ characterList: CharacterListReducer }),
    EffectsModule.forRoot([CharacterListEffects])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
