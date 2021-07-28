import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
touristicPlaces = {}
touristicActivities = {}
  constructor(public service:ApiserviceService) {
    this.service.getAllTouristicPlaces().subscribe(res =>{
      this.touristicPlaces = res
    })

    this.service.getTouristicActivities().subscribe(res =>{
      this.touristicActivities = res
    })

  }



}
