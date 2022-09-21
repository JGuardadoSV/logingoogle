import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private provider = new GoogleAuthProvider();
  //private auth = getAuth();
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }

  ingresar(){
    this.router.navigate(['principal'])
  }
loginGoogle(){
  
  const auth = getAuth();
  //auth.languageCode = 'es';
signInWithPopup(auth, this.provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    this.router.navigate(['principal'])
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

}
  

}
