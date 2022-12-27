import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailData } from 'src/app/modules/details/models/detail.interface';
import { HomeData } from 'src/app/modules/home/models/home.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getHomeData(): Observable<HomeData> {
    return this.http.get<HomeData>(`${environment.foodUIUrl}/home.json`);
  }

  getDetailsData(): Observable<DetailData> {
    return this.http.get<DetailData>(`${environment.foodUIUrl}/1.json`);
  }
}
