import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private url = 'http://localhost:1337/'
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
    return this.http.get<any>(this.url + `lugares-turisticos`)
  }
  getTouristicPlacesByID(id){
    return this.http.get<any>(this.url + `lugares-turisticos/${id}`)
  }

  /* Actividades turisticas */
  getTouristicActivities(){
    return this.http.get<any>(this.url + 'actividades-turisticas')
  }
  getTouristicActivitiesByID(id){
    return this.http.get<any>(this.url + `actividades-turisticas/${id}`)
  }

  /* Clima */
  getWeather(){
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?id=3435264&units=metric&lang=sp&appid=60ebd6a1e520851d0ac5e23fb9533e53')
  }

  /* Gastronomia */
  getGastronomia(){
    return this.http.get<any>(this.url + `/gastronomias`)
  }
  getOneGastronomia(id){
    return this.http.get<any>(this.url + `/gastronomias/${id}`)
  }

  /* Alojamientos */
  Alojamientos(){
    return this.http.get<any>(this.url + `/alojamientos`)
  }
  getOneAlojamiento(id){
    return this.http.get<any>(this.url + `/alojamientos/${id}`)
  }

  /* Compras */
  getComercios(){
    return this.http.get<any>(this.url + `/compras`)
  }
  getComerciosByID(id){
    return this.http.get<any>(this.url + `/compras/${id}`)
  }
  getComerciosCategory(categoryName){
    return this.http.get<any>(this.url + `/compras/category/${categoryName}`)
  }





}
