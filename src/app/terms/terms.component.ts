import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { LoginService } from '../services/login.service';
import { Data } from '../model/app.model';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  isSignedNda: boolean = false;

  employee!: Data;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.employee = this.localStorageService.getAccess();
  }

  onAccept(){
    this.router.navigate(['/welcome-page']);

    this.loginService.onSign();

    this.isSignedNda = this.localStorageService.getNda();
  }

}
