import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private url = 'http://localhost:3000/api'
  constructor(public http:HttpClient,public toast:ToastController) { }

  async createToast(header,color){
    const create = await this.toast.create({
      header,
      position:"bottom",
      duration: 3000,
      color
    })
    await create.present()
  }

  /* users */
  login(body){
    return this.http.post(this.url + `/users/login`,JSON.stringify(body),{headers: new HttpHeaders({'Content-Type': 'application/json' })})
  }
  register(body){
    return this.http.post(this.url + `/users/register`,JSON.stringify(body),{headers: new HttpHeaders({'Content-Type': 'application/json' })})
  }
  addReservas(userid,body,token){
    return this.http.post(this.url + `/users/id/${userid}/add/reservas`,JSON.stringify(body),{headers: new HttpHeaders({'x-access-token': `${token}` ,'Content-Type': 'application/json' })})
  }
  getProfile(token){
    return this.http.get(this.url + `/users/profile`,{headers: new HttpHeaders({'x-access-token': `${token}` ,'Content-Type': 'application/json' })})
  }
  updateProfile(id,body,token){
    return this.http.put(this.url + `users/updateProfile/${id}`,JSON.stringify(body),{headers: new HttpHeaders({'x-access-token': `${token}` ,'Content-Type': 'application/json' })})
  }
  deleteprofile(id,token){
    return this.http.delete(this.url + `users/delete/${id}`,{headers: new HttpHeaders({'x-access-token': `${token}` ,'Content-Type': 'application/json' })})
  }

  /* Lugares turisticos */
  getAllTouristicPlaces(){
    return this.http.get(this.url + `/touristicplaces/all`)
  }
  getTouristicPlacesByID(id){
    return this.http.get(this.url + `/touristicplaces/one/${id}`)
  }

  /* Actividades turisticas */
  getTouristicActivities(){
    return this.http.get(this.url + '/touristic/activities')
  }
  getTouristicActivitiesByID(id){
    return this.http.get(this.url + `/touristic/activities/id/${id}`)
  }

  /* Clima */
  getWeather(){
    return this.http.get(this.url + '/weather')
  }

  /* Comercios */
  GetCategories(){
    return this.http.get(this.url + '/category/all')
  }
  GetSpecificCategory(id){
    return this.http.get(this.url + `/category/one/${id}`)
  }
  getSpecificComercio(idCategoria,idComercio){
    return this.http.get(this.url + `/category/id/${idCategoria}/commerce/${idComercio}`)
  }




}
