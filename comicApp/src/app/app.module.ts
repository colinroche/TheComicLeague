import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthService } from './services/auth.service';
import { PersonalService } from './services/personal.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './guard/auth.guard';
import { FirebaseService } from './services/firebase.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// Prevent timestampsInSnapshots error
import { FirestoreSettingsToken } from '@angular/fire/firestore';

import { AppComponent } from './app.component';

import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    FormsModule, 
    AppRoutingModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),	
    AngularFirestoreModule,
    NgScrollbarModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    PersonalService,
    AuthGuard,
    FirebaseService,
    // allow multiple tokens if needed
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
