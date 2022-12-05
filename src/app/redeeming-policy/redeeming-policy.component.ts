import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../model/app.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-redeeming-policy',
  templateUrl: './redeeming-policy.component.html',
  styleUrls: ['./redeeming-policy.component.css']
})
export class RedeemingPolicyComponent implements OnInit {
  employee!: Data;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employee = this.localStorageService.getAccess();
  }
  onDashboard(){
    this.router.navigate(['/dashboard-page']);
  }

}
