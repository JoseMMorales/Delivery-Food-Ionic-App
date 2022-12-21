import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { SlideOpts } from '../shared/models/slides.interface';
import {
  isLocationDetail,
  catSlideSet,
  highlightSlideSet,
  featuresSlideSet,
} from './const/home.const';
import {
  Category,
  Featured,
  Highlight,
  HomeData,
} from './models/home.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categories: Category[] = [];
  highlights: Highlight[] = [];
  featured: Featured[] = [];
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
      .get<HomeData>(
        'https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json'
      )
      .subscribe({
        next: (res: HomeData) => {
          this.categories = res.categories;
          this.highlights = res.highlights;
          this.featured = res.featured;
        },
        error: (e: any) => console.error(e),
        complete: () => console.log('complete'),
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
