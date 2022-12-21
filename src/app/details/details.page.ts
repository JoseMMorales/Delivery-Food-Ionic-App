import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { IonContent, IonList, IonSlides, isPlatform } from '@ionic/angular';

import { SlideOpts } from '../shared/models/slides.interface';
import { detailSlideSet } from './const/details.const';
import { DetailData } from './models/detail.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, AfterViewInit {
  data!: DetailData;
  activeCategory: number = 0;
  listElements: ElementRef[] = [];
  categorySlidesVisible: boolean = false;
  detailSlideOpts: SlideOpts;

  @ViewChildren(IonList, { read: ElementRef }) lists!: QueryList<ElementRef>;
  @ViewChild(IonSlides) slides!: IonSlides;
  @ViewChild(IonContent) content!: IonContent;

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.detailSlideOpts = detailSlideSet;
  }

  ngOnInit() {
    this.http
      .get<DetailData>(
        'https://devdactic.fra1.digitaloceanspaces.com/foodui/1.json'
      )
      .subscribe({
        next: (res: DetailData) => {
          this.data = res;
        },
        error: (e: any) => console.error(e),
        complete: () => console.log('complete'),
      });

    // Set the header position for sticky slides
    const headerHeight = isPlatform('ios') ? 44 : 56;
    this.document.documentElement.style.setProperty(
      '--header-position',
      `calc(env(safe-area-inset-top) + ${headerHeight}px)`
    );
  }

  ngAfterViewInit(): void {
    this.lists?.changes.subscribe((_) => {
      this.listElements = this.lists.toArray();
    });
  }

  // Handle click on a button within slides
  // Automatically scroll to viewchild
  selectCategory(index: number) {
    const child: HTMLElement = this.listElements[index]?.nativeElement;
    this.content.scrollToPoint(0, child.offsetTop - 120, 1000);
  }

  onScroll(eve: any) {
    const offset = eve.detail.scrollTop;
    this.categorySlidesVisible = offset > 500;

    for (let i = 0; i < this.listElements.length; i++) {
      const item = this.listElements[i].nativeElement;

      if (this.isElementInViewport(item)) {
        this.activeCategory = i;
        this.slides.slideTo(i);
        break;
      }
    }
  }

  isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
