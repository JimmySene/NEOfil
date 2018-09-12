import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

//Fake data in the wrong place to test the application
  news: News[];

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
      return true;
    }
    else
    {
      return false;
    }
  }

  constructor(private newsService:NewsService) { }

  getNews(): void {
    this.news = this.newsService.getNews();
  }


  ngOnInit() {

    this.getNews();

      //localStorage.clear();
  }



}
