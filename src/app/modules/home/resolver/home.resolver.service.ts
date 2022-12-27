import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { FoodService } from 'src/app/shared/services/food.service';
import { HomeData } from '../models/home.interface';

@Injectable()
export class HomeResolver implements Resolve<HomeData> {
  constructor(public foodService: FoodService) {}
  resolve(): Observable<HomeData> {
    return this.foodService.getHomeData();
  }
}
