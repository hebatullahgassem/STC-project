import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccessStcComponent } from './access-stc/access-stc.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TermsComponent } from './terms/terms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PointsRulesComponent } from './points-rules/points-rules.component';
import { RedeemingPolicyComponent } from './redeeming-policy/redeeming-policy.component';
import { ListComplaintsComponent } from './list-complaints/list-complaints.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AccessStcComponent,
    WelcomePageComponent,
    TermsComponent,
    DashboardComponent,
    PointsRulesComponent,
    RedeemingPolicyComponent,
    ListComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
