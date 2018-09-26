import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewsFavComponent } from './news-fav/news-fav.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsContentComponent,
    NewsFavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
