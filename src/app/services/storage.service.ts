import { Injectable } from '@angular/core';


export interface Item{
  date:string,
  type: number, // 0=comercio 1=actividades 2=lugares turisticos
  categoryId: string,
  placeId:string,
  name: string,
}
const ITEM_KEY = 'bookmark'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  tasks: Item[];
  constructor() { }

  saveItem(task):void{
    let tasks
    if (localStorage.getItem('tasks') == null) {
      tasks = []
      tasks.push(task);
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }else{
      JSON.parse(localStorage.getItem('tasks'))
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }

  }

  getItems(): Item[]{
    if (localStorage.getItem('tasks') == null) {
      this.tasks = [];
    }else{
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    return this.tasks;
  }

  deleteItem(task: Item){
    for (let i = 0; this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i,1);
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
      }
      
    }
  }


}
