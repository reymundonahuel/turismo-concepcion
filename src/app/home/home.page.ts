import { Component, ViewChild } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChild(IonSlides) slides: IonSlides;
touristicPlaces:any
touristicActivities = {}
category = {}
weather
currentWeather
pressure
humidity
weatherIcon
logoweather
descriptionWeather
wind
slideOptsTwo = {
  initialSlide: 0,
  slidesPerView: 2,
  spaceBetween: 5
};
  constructor(public service:ApiserviceService) {
    this.slideOptsTwo = {
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 5
    };
    this.service.getAllTouristicPlaces().subscribe(res =>{
      this.touristicPlaces = res
      console.log(res)
    })

    this.service.getTouristicActivities().subscribe(res =>{
      this.touristicActivities = res
    })

    this.service.GetCategories().subscribe(res =>{
      this.category = res
    })

    this.service.getWeather().subscribe(res =>{
      this.weather = res
      this.currentWeather = Math.round(this.weather['main']['temp'])
      this.pressure = this.weather['main']['pressure']
      this.humidity = this.weather['main']['humidity']
      this.descriptionWeather = this.weather['weather'][0]['description']
      this.weatherIcon = this.weather['weather'][0]['icon']
      console.log(this.weather['weather'][0]['icon'])
      this.wind = this.weather['wind']['speed']
      this.logoweather = `http://openweathermap.org/img/wn/${this.weatherIcon}@2x.png`
    })


  }





}
