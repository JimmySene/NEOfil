import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    news: News[] = [
    {
      id: 1,
      date_public: "01-08-2018",
      titre_appercu: "Economisez votre batterie de tablette",
      titre: "Economisez votre batterie de tablette",
      contenu: "lorem ipsum"
    },
    {
      id: 2,
      date_public: "02-08-2018",
      titre_appercu: "Une nouvelle version du service identité",
      titre: "Une nouvelle version du service identité",
      contenu: "lorem ipsum"
    },
    {
      id: 3,
      date_public: "02-08-2018",
      titre_appercu: "Nouvelle application nommée \"XXX\"",
      titre: "Nouvelle application nommée \"XXX\"",
      contenu: "lorem ipsum"
    },
  ];

  selectedNews: News;

  select_news(the_news: News) : void {
    this.selectedNews = the_news;
  }

  delete_news(index:number) : void {
    this.news.splice(index,1);
  }

  constructor() { }

  ngOnInit() {
  }



}
