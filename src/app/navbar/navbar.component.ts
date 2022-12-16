import { Component, OnInit } from '@angular/core';
import { Data } from '../model/app.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  employee!: Data;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.employee = this.localStorageService.getAccess();
  }

}
