import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TopModule } from './pages/top/top.module';
import { CharacterListModule } from './pages/character-list/character-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, TopModule, CharacterListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
