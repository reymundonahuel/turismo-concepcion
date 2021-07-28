import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouristicplacesPageRoutingModule } from './touristicplaces-routing.module';

import { TouristicplacesPage } from './touristicplaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouristicplacesPageRoutingModule
  ],
  declarations: [TouristicplacesPage]
})
export class TouristicplacesPageModule {}
