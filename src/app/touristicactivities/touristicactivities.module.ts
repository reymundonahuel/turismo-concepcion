import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouristicactivitiesPageRoutingModule } from './touristicactivities-routing.module';

import { TouristicactivitiesPage } from './touristicactivities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouristicactivitiesPageRoutingModule
  ],
  declarations: [TouristicactivitiesPage]
})
export class TouristicactivitiesPageModule {}
