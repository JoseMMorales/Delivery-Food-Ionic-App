import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  isLocationDetail,
  catSlideSet,
  highlightSlideSet,
  featuresSlideSet,
} from './const/home.const';
import {
  Category,
  Feature,
  Highlight,
  SlideOpts,
} from './models/home.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories: Category[] = [];
  highlights: Highlight[] = [];
  featured: Feature[] = [];
  showLocationDetail: boolean;
  featuresSlideOpts: SlideOpts;
  highlightSlideOpts: SlideOpts;
  catSlideOpts: SlideOpts;

  constructor(private http: HttpClient) {
    this.showLocationDetail = isLocationDetail;
    this.featuresSlideOpts = featuresSlideSet;
    this.highlightSlideOpts = highlightSlideSet;
    this.catSlideOpts = catSlideSet;
  }

  ngOnInit() {
    this.http
      .get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
      .subscribe((res: any) => {
        console.log(res);

        this.categories = res.categories;
        this.highlights = res.highlights;
        this.featured = res.featured;
      });
  }

  doRefresh(eve: any) {
    setTimeout(() => {
      eve.target.complete();
    }, 2000);
  }

  onScroll(ev: any) {
    const offset = ev.detail.scrollTop;
    this.showLocationDetail = offset > 50;
  }
}
