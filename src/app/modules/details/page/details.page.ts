import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { IonContent, IonList, IonSlides, isPlatform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { FoodService } from 'src/app/shared/services/food.service';

import { SlideOpts } from '../../../shared/models/slides.interface';
import { detailSlideSet } from '../const/details.const';
import { DetailData } from '../models/detail.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, AfterViewInit, OnDestroy {
  data!: DetailData;
  activeCategory: number = 0;
  listElements: ElementRef[] = [];
  categorySlidesVisible: boolean = false;
  detailSlideOpts: SlideOpts;
  subscription$!: Subscription;

  @ViewChildren(IonList, { read: ElementRef }) lists!: QueryList<ElementRef>;
  @ViewChild(IonSlides) slides!: IonSlides;
  @ViewChild(IonContent) content!: IonContent;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private foodService: FoodService
  ) {
    this.detailSlideOpts = detailSlideSet;
  }

  ngOnInit() {
    this.foodService.getDetailsData().subscribe({
      next: (response: DetailData) => {
        this.data = response;
      },
      error: (error: Error) => console.error(error),
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
    console.log(this.lists);

    this.subscription$ = this.lists?.changes.subscribe((_) => {
      this.listElements = this.lists.toArray();
      console.log(this.listElements);
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  // Handle click on a button within slides
  // Automatically scroll to viewchild
  selectCategory(index: number): void {
    console.log(index);

    const child: HTMLElement = this.listElements[index]?.nativeElement;
    console.log(child);

    this.content.scrollToPoint(0, child.offsetTop - 80, 1000);
  }

  //Identifying when slider is visible with Scroll
  onScroll(eve: any): void {
    const offset = eve.detail.scrollTop;
    this.categorySlidesVisible = offset > 500;
    this.elementActiveToGo();
  }

  elementActiveToGo(): void {
    this.listElements.some((element, index) => {
      if (this.isElementInViewport(element.nativeElement)) {
        console.log(index);

        this.activeCategory = index;
        this.slides.slideTo(index);
        return;
      }
    });
  }

  isElementInViewport(el: HTMLElement): boolean {
    return el.getBoundingClientRect().top <= 120;
  }
}
