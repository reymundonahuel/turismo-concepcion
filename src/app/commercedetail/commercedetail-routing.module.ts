import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercedetailPage } from './commercedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CommercedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercedetailPageRoutingModule {}
