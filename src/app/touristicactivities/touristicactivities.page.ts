import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-touristicactivities',
  templateUrl: './touristicactivities.page.html',
  styleUrls: ['./touristicactivities.page.scss'],
})
export class TouristicactivitiesPage implements OnInit {
id
place:any = {}
  constructor(public api:ApiserviceService,public actv: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.actv.snapshot.params['id']
    this.api.getTouristicActivitiesByID(this.id).subscribe(res =>{
      this.place = res
    })
  }

}
