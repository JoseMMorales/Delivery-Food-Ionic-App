import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './directives/parallax.directive';
import { HideHeaderDirective } from './directives/hide-header.directive';

@NgModule({
  declarations: [ParallaxDirective, HideHeaderDirective],
  imports: [CommonModule],
  exports: [ParallaxDirective, HideHeaderDirective],
})
export class SharedModule {}
