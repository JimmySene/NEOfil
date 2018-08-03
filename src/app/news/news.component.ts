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
    title_preview: "Economisez votre batterie de tablette",
    text_link: "par ici",
    title: "Economisez votre batterie de tablette",
    content: "lorem ipsum",
    important: true
  },
  {
    id: 2,
    public_date: new Date(2018,7,2),
    title_preview: "Une nouvelle version du service identité",
    text_link: "la nouveauté de la version",
    title: "Une nouvelle version du service identité",
    content: "lorem ipsum",
    important: false
  },
  {
    id: 3,
    public_date: new Date(2018,7,3),
    title_preview: "Nouvelle application nommée \"XXX\"",
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

  constructor() { }

  ngOnInit() {

  }



}
