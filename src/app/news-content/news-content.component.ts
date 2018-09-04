import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private location: Location
  ) { }

  ngOnInit() { // Recover the focused news in the_news

      const id = +this.route.snapshot.paramMap.get('id');
      for(let entry of this.news) {
        if(entry.id == id)
          this.the_news = entry;
      }

      localStorage.setItem(id.toString(),'true');
      console.log(localStorage.getItem(id.toString()));
  }

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

}
