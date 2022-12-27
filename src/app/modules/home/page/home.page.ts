import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SlideOpts } from '../../../shared/models/slides.interface';
import {
  isLocationDetail,
  catSlideSet,
  highlightSlideSet,
  featuresSlideSet,
} from '../const/home.const';
import { Category, Featured, Highlight } from '../models/home.interface';

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

  constructor(private activeRoute: ActivatedRoute) {
    this.showLocationDetail = isLocationDetail;
    this.featuresSlideOpts = featuresSlideSet;
    this.highlightSlideOpts = highlightSlideSet;
    this.catSlideOpts = catSlideSet;
  }

  ngOnInit() {
    this.activeRoute.data.subscribe({
      next: ({ homeResolver }) => {
        this.categories = homeResolver['categories'];
        this.highlights = homeResolver['highlights'];
        this.featured = homeResolver['featured'];
      },
      error: (error: ErrorEvent) => console.error(error),
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
