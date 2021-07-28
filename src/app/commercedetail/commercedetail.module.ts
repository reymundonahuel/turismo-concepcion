import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercedetailPageRoutingModule } from './commercedetail-routing.module';

import { CommercedetailPage } from './commercedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercedetailPageRoutingModule
  ],
  declarations: [CommercedetailPage]
})
export class CommercedetailPageModule {}
