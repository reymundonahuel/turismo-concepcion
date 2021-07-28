import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouristicplacesPage } from './touristicplaces.page';

const routes: Routes = [
  {
    path: '',
    component: TouristicplacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristicplacesPageRoutingModule {}
