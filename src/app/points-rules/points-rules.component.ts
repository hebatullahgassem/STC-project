import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../model/app.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-points-rules',
  templateUrl: './points-rules.component.html',
  styleUrls: ['./points-rules.component.css']
})
export class PointsRulesComponent implements OnInit {
  employee!: Data;

  disable = true;

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
