import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../model/app.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.css']
})
export class ListComplaintsComponent implements OnInit {
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
