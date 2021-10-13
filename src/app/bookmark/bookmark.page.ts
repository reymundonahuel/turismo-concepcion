import { Component, OnInit } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  tasks: Item[]
  deletede
  constructor(public storageService:StorageService,public service:ApiserviceService) { }

  ngOnInit() {
    this.tasks = this.storageService.getItems()
    console.log(this.tasks)
  }

  delete(task){
    this.storageService.deleteItem(task)
    this.service.createToast('Eliminado','success')
    this.ngOnInit()

  }

}
