import { Injectable } from '@angular/core';
import { News } from './news';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http:HttpClient) {

  }


  news: News[] = [];

  // Init news with webservice
  initNews() {
    this.http
    .get<any>('http://plf.poc.plf-sso.ppol.minint.fr/news')
    .subscribe(
      (value) => {
         this.news = value;
      },
    (error) => {
      console.log('erreur');
    });
  }
  // Return all news
  getNews(): News[] {
    this.initNews();
    return this.news;
  }

  // Return bookmarks
  getFavs() :News[] {
    this.initNews();
    let fav: News[] = [];
    this.news.forEach(function(value){
      if(localStorage.getItem("fav_" + value.id.toString()) !== null)
        fav.push(value);
    });

    return fav;
  }

}
