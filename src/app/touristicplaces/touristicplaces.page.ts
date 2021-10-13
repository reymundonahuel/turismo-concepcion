import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-touristicplaces',
  templateUrl: './touristicplaces.page.html',
  styleUrls: ['./touristicplaces.page.scss'],
})
export class TouristicplacesPage implements OnInit {
id
place:any = {}
  constructor(public actv:ActivatedRoute, public service:ApiserviceService,public storageService:StorageService) { }

  ngOnInit() {
    this.id = this.actv.snapshot.params['id']
    this.service.getTouristicPlacesByID(this.id).subscribe(res =>{
      this.place = res
      console.log(this.place)
    })
  }

  savetoBookmark(){
    const body = {
      date: Date.now(),
      type:2,
      categoryId:null,
      placeId:`${this.id}`,
      name: `${this.place.name}`
    }
    this.storageService.saveItem(body)
    this.service.createToast('Guardado','success')
  }



}
