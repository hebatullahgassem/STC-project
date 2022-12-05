import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import empData from '../json/login.json';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../model/app.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  employee!: Data;

  acceptTerms = new BehaviorSubject<boolean>(true);
  accTerms = this.acceptTerms.asObservable();

  hideDiv = new BehaviorSubject<boolean>(true);
  hideD = this.hideDiv.asObservable();

  constructor(private localStorageService: LocalStorageService) { }

  getEmp(email: string, password: string) {
    for (let i = 0; i < empData.length; i++) {
      if (empData[i].email === email && empData[i].password === password) {
        this.localStorageService.setEmployee(empData[i]);
        return true;
      }
    }
    return false;
  }

  onSign() {
    this.acceptTerms.next(false);

    this.hideDiv.next(false);
  }
}
