import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isSignedNda:boolean =false;

  isDashboard: boolean = false;

  constructor(private router: Router, private localstorageServ: LocalStorageService) { }

  ngOnInit(): void {
  }

  onDashboard() {
    this.router.navigate(['/dashboard-page']);
    this.isDashboard = true
  }
}
