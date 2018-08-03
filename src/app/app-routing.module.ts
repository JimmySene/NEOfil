import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsContentComponent } from './news-content/news-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full'},
  { path: 'news', component: NewsComponent},
  { path: 'news-content/:id', component: NewsContentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
