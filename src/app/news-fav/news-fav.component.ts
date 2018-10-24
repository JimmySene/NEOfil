import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-fav',
  templateUrl: './news-fav.component.html',
  styleUrls: ['./news-fav.component.css']
})
export class NewsFavComponent implements OnInit {

  // Delete the focused news in the display
  delete_news(index:number): void {
    this.news.splice(index,1);
  }

  // Put the state read on the news ID
  view_message(id:number)
  {
    localStorage.setItem(id.toString(), 'true');
  }

  // Delete the state read on the news ID
  unview_message(id:number)
  {
    localStorage.removeItem(id.toString());
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

  p :number;
  
  constructor(private newsService:NewsService) { }

  // Put news in the array news
  getNews(): void {
    this.news = this.newsService.getFavs();
  }


  ngOnInit() {

    this.getNews();

      //localStorage.clear();
  }

  news:News[];

}
