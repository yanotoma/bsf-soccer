
import { PlayerService } from './player/player.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerCrudComponent } from './player-crud/player-crud.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCrudComponent,
    PlayerListComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
