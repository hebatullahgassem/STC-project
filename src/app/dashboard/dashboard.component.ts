import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../model/app.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employee!: Data;

 complainsData = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 40632,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "2000",
        "value": 36953,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "1990",
        "value": 31476,
        "extra": {
          "code": "de"
        }
      }
    ]
  },
  {
    "name": "United States",
    "series": [
      {
        "name": "2010",
        "value": 0,
        "extra": {
          "code": "us"
        }
      },
      {
        "name": "2000",
        "value": 45986,
        "extra": {
          "code": "us"
        }
      },
      {
        "name": "1990",
        "value": 37060,
        "extra": {
          "code": "us"
        }
      }
    ]
  },
  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 36745,
        "extra": {
          "code": "fr"
        }
      },
      {
        "name": "2000",
        "value": 34774,
        "extra": {
          "code": "fr"
        }
      },
      {
        "name": "1990",
        "value": 29476,
        "extra": {
          "code": "fr"
        }
      }
    ]
  },
  {
    "name": "United Kingdom",
    "series": [
      {
        "name": "2010",
        "value": 36240,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "2000",
        "value": 32543,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "1990",
        "value": 26424,
        "extra": {
          "code": "uk"
        }
      }
    ]
  }
];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employee = this.localStorageService.getAccess();
  }

  onPoints(){
    this.router.navigate(['/points-and-rules']);
  }

  onRedeem(){
    this.router.navigate(['/redeeming-policy']);
  }

  onComplaints(){
    this.router.navigate(['/list-of-complaints']);
  }
}
