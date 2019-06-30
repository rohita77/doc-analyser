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
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagePredictorComponent,
    ImageLabelComponent,
    SignInComponent
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
    AngularFireStorageModule, 
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      () => 'your_app_name_factory',
      {
        enableFirestoreSync: false, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false // whether to open/show a snackbar message on auth error - default : true
      }
      
      ) // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
