import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email:string,password:string){

    return new Promise(
      (resolve,reject) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          () => { 
          resolve(true),
          console.log("User created succfully")
          },
          (error) =>{ 
          reject(error)
          }
        )
      }
    )
  }
  signInUser(email:string,password:string){
    return new Promise(
      (resolve,reject) =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          () => {
            resolve(true),
            console.log("Welcome")
          },
          (error) =>{ 
            reject(error)
            }
        )
      }
    )
  }
  signOutUser(){
    firebase.auth().signOut()
  }

}
