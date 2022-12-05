import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Data } from '../model/app.model';

@Component({
  selector: 'app-access-stc',
  templateUrl: './access-stc.component.html',
  styleUrls: ['./access-stc.component.css']
})
export class AccessStcComponent implements OnInit {

  accept = false;
  disable = true;

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  employee!: Data;

  ngOnInit() {
    this.employee = this.localStorageService.getAccess();
    //console.log(this.employee.email);
  }

  onContinue() {
    this.router.navigate(['/welcome-page']);
  }
}