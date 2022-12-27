import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './directives/parallax.directive';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { FoodService } from './services/food.service';

@NgModule({
  declarations: [ParallaxDirective, HideHeaderDirective],
  imports: [CommonModule],
  exports: [ParallaxDirective, HideHeaderDirective],
  providers: [FoodService],
})
export class SharedModule {}
