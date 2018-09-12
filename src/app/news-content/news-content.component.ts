import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  // the focused news
  the_news: News;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private newsService:NewsService
  ) { }

  ngOnInit() { // Recover the focused news in the_news

      this.getNews();
      const id = +this.route.snapshot.paramMap.get('id');

      for(let entry of this.news) {
        if(entry.id == id)
          this.the_news = entry;
      }

      localStorage.setItem(id.toString(),'true');
  }

  //Fake data in the wrong place to test the application
  news: News[];

  getNews(): void {
    this.news = this.newsService.getNews();
  }

}
