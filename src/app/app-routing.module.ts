import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { NewsFavComponent } from './news-fav/news-fav.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent},
  { path: 'news-content/:id', component: NewsContentComponent},
  { path: 'news-fav', component: NewsFavComponent},
  { path: '', redirectTo: '/news', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
