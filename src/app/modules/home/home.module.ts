import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { HomePage } from './page/home.page';
import { HomeResolver } from './resolver/home.resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [HomePage],
  providers: [HomeResolver],
})
export class HomePageModule {}
