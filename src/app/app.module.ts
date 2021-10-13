import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* modules */
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
/* import { SocialSharing } from '@ionic-native/social-sharing/ngx'; */



/* Firebase Config */
const config = {
  apiKey: "AIzaSyBsAKx_p1xqteQ9pu1COGU1FtEb3-Bl5_Y",
    authDomain: "turismoconcepcion-362b8.firebaseapp.com",
    projectId: "turismoconcepcion-362b8",
    storageBucket: "turismoconcepcion-362b8.appspot.com",
    messagingSenderId: "534862104848",
    appId: "1:534862104848:web:8acf34467002237879bd95",
    measurementId: "G-HX1VZ9LN4V"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule ,IonicModule.forRoot(),AngularFirestoreModule,AngularFireStorageModule,HttpClientModule,AngularFireModule.initializeApp(config),
    AngularFirestoreModule,AppRoutingModule],
  providers: [AngularFireStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
