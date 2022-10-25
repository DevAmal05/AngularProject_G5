import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import {ButtonModule} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import { HotoserviceService } from './hotoservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ImageModule} from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { EventService } from './event.service';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    GalleriaModule,
    HttpClientModule,
    ImageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,

  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, HotoserviceService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
