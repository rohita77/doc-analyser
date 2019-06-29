import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FileUploadModule } from 'ng2-file-upload';

import {MaterialModule} from './material-module';

import { ImagePredictorComponent } from './image-predictor/image-predictor.component';
import { ImageLabelComponent } from './image-label/image-label.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ImagePredictorComponent,
    ImageLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FileUploadModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'doc-analyzer'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
