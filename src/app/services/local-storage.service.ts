import { Injectable } from "@angular/core";
import { ndaSign } from "../enum/nda.enum";
import { Data } from '../model/app.model';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  setEmployee(emp: Data) {
    localStorage.setItem("user", JSON.stringify(emp));
  }

  getAccess(): any {
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
  }

  setNda2(sign: string){
    localStorage.setItem("signedNDA", sign);
  }
/////////////////////////////////////////
  // setColor(color: string){
  //   sessionStorage.setItem("colored", color);
  // }
  // getColor(): any {
  //   return sessionStorage.getItem("colored") ? sessionStorage.getItem("colored") : colorSelect;
  // }
//////////////////////////////////////////
  getNda(): any {
    return localStorage.getItem("signedNDA") ? localStorage.getItem("signedNDA") : ndaSign.reject;
  }

  getCongrates() {
    localStorage.getItem("signedNDA");
  }

  sign() {
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
  }
}