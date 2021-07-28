import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouristicactivitiesPage } from './touristicactivities.page';

const routes: Routes = [
  {
    path: '',
    component: TouristicactivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristicactivitiesPageRoutingModule {}
