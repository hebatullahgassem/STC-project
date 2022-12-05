import { Injectable } from "@angular/core";
import { Data } from '../model/app.model';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  //isSignedNda: boolean = false;

  constructor() { }

  setEmployee(emp: Data) {
    localStorage.setItem("user", JSON.stringify(emp));
  }

  getAccess(): any {
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
  }

  getNda(): boolean {
    localStorage.setItem("signedNDA", JSON.stringify(true));
    return localStorage.getItem("signedNDA") ? JSON.parse(localStorage.getItem("signedNDA")!) : true;
  }

  /////////////////////////////////////////////////////
  getCongrates() {
    localStorage.getItem("signedNDA");
  }

  sign() {
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
  }
}