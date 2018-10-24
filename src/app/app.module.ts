import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewsFavComponent } from './news-fav/news-fav.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsContentComponent,
    NewsFavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
