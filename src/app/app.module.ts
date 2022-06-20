import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './components/template/main/main.component';
import { DetailsComponent } from './views/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
