import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../model/app.model';
import { LocalStorageService } from '../services/local-storage.service';
import { barChart, lineChart } from './graphes';
import { legend } from '../enum/color.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // redeemCount: number = 0;
  // compCount: number = 0;
  // quesCount: number = 0;

  // redeemCountStop: any = setInterval(() => {
  //   this.redeemCount++;
  //   if(this.redeemCount === 561){
  //     clearInterval(this.redeemCountStop);
  //   }
  // });

  // compCountStop: any = setInterval(() => {
  //   this.compCount++;
  //   if(this.compCount === 2){
  //     clearInterval(this.compCountStop);
  //   }
  // },500);

  // quesCountStop: any = setInterval(() => {
  //   this.quesCount++;
  //   if(this.quesCount === 12){
  //     clearInterval(this.quesCountStop);
  //   }
  // },50);


////////////////////////////////////////
  speed: any;

  legendGroup = legend;

  employee!: Data;

  showdata: any; 

  barChart = barChart;
  lineChart = lineChart;

  /////////bar
  colorScheme: any = {
    domain: ['#ffdd40', '#4f008c', '#00c48c']
  };
  colorScheme3: any = {
    domain: ['#ffdd40', '#4f008c', '#00c48c']
  };

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  schemeType: string = 'ordinal';
  barPadding: number = 0;
  roundEdges: boolean = false;
  groupPadding: number = 26;
  showLegend: boolean=true;
  showDataLabel: boolean = false;
  //roundDomain: boolean = true;
  //background
  //legendposition 


  //////line
  grid:boolean = true;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel2: boolean = true;
  showXAxisLabel2: boolean = true;
  xAxisLabel2: string = 'Year';
  yAxisLabel2: string = 'Population';
  timeline: boolean = true;
  //yaxis grid line

  colorScheme2: any = {
    domain: ['#4f008c']
  }

  // colorScheme3: any = {
  //   domain: ['#ffdd40', '#4f008c', '#00c48c']
  // }


  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  onSelect(data: any) {
    this.showdata = [];
    // if(typeof data === 'string'){
    //   if(data === this.legendGroup.opened){
    //     this.colorScheme.domain = ['#ffdd0'];
    //   } else if (data === 'Forwarded'){
    //     this.colorScheme.domain = ['#4f008c'];
    //   } else if (data === 'Closed'){
    //     this.colorScheme.domain = ['#00c48c'];
    //   }
      switch(data){
        case this.legendGroup.opened: this.colorScheme3.domain = ['#ffdd40']
        break;

        case this.legendGroup.forwarded: this.colorScheme3.domain = ['#4f008c']
        break;
          
        case this.legendGroup.closed: this.colorScheme3.domain = ['#00c48c']  
        break;
      }

      this.showdata = this.barChart.map((bar) => {
        return  {name: bar.name, series: bar.series.filter(series => series.name === data)};
    });
    //console.log(this.showdata, this.barChart);
  }


  ngOnInit() {
    this.employee = this.localStorageService.getAccess();
  }




  onPoints() {
    this.router.navigate(['/points-and-rules']);
  }

  onRedeem() {
    this.router.navigate(['/redeeming-policy']);
  }

  onComplaints() {
    this.router.navigate(['/list-of-complaints']);
  }
}

