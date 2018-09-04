import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

//Fake data in the wrong place to test the application
  news: News[] = [
  {
    id: 1,
    public_date: new Date(2018,7,1),
    title_preview: "Economisez votre batterie de tablette ou de smartphone : suivez nos conseils ",
    text_link: "par ici",
    title: "Economisez votre batterie de tablette",
    content: "Faire les mises à jour système dès que demandées Faire les mises à jour applicatives (store) dès que demandées Désactiver le BLUETOOTH  Désactiver le WIFI  Dans les paramètres WIFI avancés, désactiver aussi le ",
    important: true
  },
  {
    id: 2,
    public_date: new Date(2018,7,2),
    title_preview: "Une nouvelle version du service identité est disponible dans le store. Pensez à installer la mise à jour ! ...",
    text_link: "la nouveauté de la version",
    title: "Une nouvelle version du service identité",
    content: "lorem ipsum",
    important: false
  },
  {
    id: 3,
    public_date: new Date(2018,7,3),
    title_preview: "UNe nouvelle application baptisée \"XXX\" pour faciliter les contacts Police/Population est disponible dans le store ...",
    text_link: "en savoir plus",
    title: "Nouvelle application nommée \"XXX\"",
    content: "lorem ipsum",
    important: false
  },
];

  // Delete the focused news in the display
  delete_news(index:number): void {
    this.news.splice(index,1);
  }

  // Verification view news (local storage with ID news = viewed)
  view_verif(index:number): boolean {
    if(localStorage.getItem(index.toString()) !== null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  del_verif(index:number): boolean {
    if(localStorage.getItem(index.toString()) !== null)
    {
      console.log(index + "- true");
      return true;
    }
    else
    {
        console.log(index + "- false");
      return false;
    }
  }

  constructor() { }

  ngOnInit() {
      //localStorage.clear();
  }



}
