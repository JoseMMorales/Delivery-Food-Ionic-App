import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './page/home.page';
import { HomeResolver } from './resolver/home.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      homeResolver: HomeResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
