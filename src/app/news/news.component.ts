import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  news: News[];


  // Delete the focused news in the display
  delete_news(index:number): void {
    this.news.splice(index,1);
  }

  // Put the state read on the news ID
  view_message(id:number)
  {
    if(localStorage.getItem(id.toString()))
    {
        localStorage.removeItem(id.toString());
    }
    else
    {
        localStorage.setItem(id.toString(), 'true');
    }
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

/*
  del_verif(index:number): boolean {
    if(localStorage.getItem(index.toString()) !== null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }*/

  // Verification bookmark news (local storage with ID news = bookmark)
  fav_verif(index:number): boolean {
    if(localStorage.getItem("fav_" + index.toString()) !== null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  // Put a bookmark on news ID or delete it
  bookmark(id:number)
  {
    if(localStorage.getItem("fav_" + id.toString()))
    {
        localStorage.removeItem("fav_" + id.toString());
    }
    else
    {
        localStorage.setItem("fav_" + id.toString(), 'true');
    }
  }
  constructor(private newsService:NewsService) { }

  /*reload(): void {
    this.newsService.initNews();
    this.news = this.newsService.getNews();

  }*/
  // Put news in the array news
  getNews(): void {
    this.news = this.newsService.getNews();
  }

  p :number;


  ngOnInit() {

    this.getNews();

      //localStorage.clear();
  }



}
