import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoGameDetailComponent } from './video-game-detail/video-game-detail.component';
import { VideoGameListComponent } from './video-game-list/video-game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGameDetailComponent,
    VideoGameListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
