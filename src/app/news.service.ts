import { Injectable } from '@angular/core';
import { News } from './news';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http:HttpClient) {
    this.initNews();
  }


  news: News[] = [];


/*
  news: News[] = [
    {
      id: 1,
      public_date: new Date(),
      title_preview: "Economisez votre batterie de tablette ou de smartphone : suivez nos conseils ",
      title: "Economisez votre batterie de tablette",
      content: "Faire les mises à jour système dès que demandées Faire les mises à jour applicatives (store) dès que demandées Désactiver le BLUETOOTH  Désactiver le WIFI  Dans les paramètres WIFI avancés, désactiver aussi le ",
      important: true
    },
    {
      id: 2,
      public_date: new Date(2018,7,2),
      title_preview: "Une nouvelle version du service identité est disponible dans le store. Pensez à installer la mise à jour ! ...",
      title: "Une nouvelle version du service identité",
      content: "lorem ipsum",
      important: false
    },
    {
      id: 3,
      public_date: new Date(2018,7,3),
      title_preview: "UNe nouvelle application baptisée \"XXX\" pour faciliter les contacts Police/Population est disponible dans le store ...",
      title: "Nouvelle application nommée \"XXX\"",
      content: "lorem ipsum",
      important: false
    },
    {
      id: 4,
      public_date: new Date(2018,7,1),
      title_preview: "Economisez votre batterie de tablette ou de smartphone : suivez nos conseils ",
      title: "Economisez votre batterie de tablette",
      content: "Faire les mises à jour système dès que demandées Faire les mises à jour applicatives (store) dès que demandées Désactiver le BLUETOOTH  Désactiver le WIFI  Dans les paramètres WIFI avancés, désactiver aussi le ",
      important: true
    },
    {
      id: 5,
      public_date: new Date(2018,7,2),
      title_preview: "Une nouvelle version du service identité est disponible dans le store. Pensez à installer la mise à jour ! ...",
      title: "Une nouvelle version du service identité",
      content: "lorem ipsum",
      important: false
    },
    {
      id: 6,
      public_date: new Date(2018,7,3),
      title_preview: "UNe nouvelle application baptisée \"XXX\" pour faciliter les contacts Police/Population est disponible dans le store ...",
      title: "Nouvelle application nommée \"XXX\"",
      content: "lorem ipsum",
      important: false
    },
    {
      id: 7,
      public_date: new Date(2018,7,1),
      title_preview: "Economisez votre batterie de tablette ou de smartphone : suivez nos conseils ",
      title: "Economisez votre batterie de tablette",
      content: "Faire les mises à jour système dès que demandées Faire les mises à jour applicatives (store) dès que demandées Désactiver le BLUETOOTH  Désactiver le WIFI  Dans les paramètres WIFI avancés, désactiver aussi le ",
      important: true
    },
    {
      id: 8,
      public_date: new Date(2018,7,2),
      title_preview: "Une nouvelle version du service identité est disponible dans le store. Pensez à installer la mise à jour ! ...",
      title: "Une nouvelle version du service identité",
      content: "lorem ipsum",
      important: false
    },
    {
      id: 9,
      public_date: new Date(2018,7,3),
      title_preview: "UNe nouvelle application baptisée \"XXX\" pour faciliter les contacts Police/Population est disponible dans le store ...",
      title: "Nouvelle application nommée \"XXX\"",
      content: "lorem ipsum",
      important: false
    },
    {
      id: 10,
      public_date: new Date(2018,7,1),
      title_preview: "Economisez votre batterie de tablette ou de smartphone : suivez nos conseils ",
      title: "Economisez votre batterie de tablette",
      content: "Faire les mises à jour système dès que demandées Faire les mises à jour applicatives (store) dès que demandées Désactiver le BLUETOOTH  Désactiver le WIFI  Dans les paramètres WIFI avancés, désactiver aussi le ",
      important: true
    },
    {
      id: 11,
      public_date: new Date(2018,7,2),
      title_preview: "Une nouvelle version du service identité est disponible dans le store. Pensez à installer la mise à jour ! ...",
      title: "Une nouvelle version du service identité",
      content: "lorem ipsum",
      important: false
    },
    {
      id: 12,
      public_date: new Date(2018,7,3),
      title_preview: "UNe nouvelle application baptisée \"XXX\" pour faciliter les contacts Police/Population est disponible dans le store ...",
      title: "Nouvelle application nommée \"XXX\"",
      content: "lorem ipsum",
      important: false
    }
  ]; */

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

    return this.news;
  }

  // Return bookmarks
  getFavs() :News[] {
    let fav: News[] = [];
    this.news.forEach(function(value){
      if(localStorage.getItem("fav_" + value.id.toString()) !== null)
        fav.push(value);
    });

    return fav;
  }

}
