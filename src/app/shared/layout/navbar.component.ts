import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/app.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
