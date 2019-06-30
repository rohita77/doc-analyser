import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  showSignIn = false;
  showUserDetails = false;

  constructor(
    public afAuth: AngularFireAuth,

  ) { 

    afAuth.authState.subscribe(auth => {
      //the auth object contains the logged in user info
      // if one exists. 
    this.hideSignInUI();

  });

  }

  ngOnInit() {
  }

  hideSignInUI() {
    this.showSignIn = false;
    this.showUserDetails = false;
    console.log("hideSignInUI fired")
  }


}
