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
      public_date: "01-08-2018",
      title_preview: "Economisez votre batterie de tablette",
      text_link: "par ici",
      title: "Economisez votre batterie de tablette",
      content: "lorem ipsum"
    },
    {
      id: 2,
      public_date: "02-08-2018",
      title_preview: "Une nouvelle version du service identité",
      text_link: "la nouveauté de la version",
      title: "Une nouvelle version du service identité",
      content: "lorem ipsum"
    },
    {
      id: 3,
      public_date: "02-08-2018",
      title_preview: "Nouvelle application nommée \"XXX\"",
      text_link: "en savoir plus",
      title: "Nouvelle application nommée \"XXX\"",
      content: "lorem ipsum"
    },
  ];

  selected_news: News;

  // Select the focused news
  select_news(the_news: News): void {
    this.selected_news = the_news;
  }

  // Delete the focused news in the display
  delete_news(index:number): void {
    this.news.splice(index,1);
  }

  constructor() { }

  ngOnInit() {
  }



}
