import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessStcComponent } from './access-stc/access-stc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';
import { ListComplaintsComponent } from './list-complaints/list-complaints.component';
import { LoginComponent } from './login/login.component';
import { PointsRulesComponent } from './points-rules/points-rules.component';
import { RedeemingPolicyComponent } from './redeeming-policy/redeeming-policy.component';
import { TermsComponent } from './terms/terms.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomeComponent},
  {path: '', component: LayoutOneComponent, 
  children: [
    {path: 'welcome-page', component: WelcomePageComponent},
    {path: 'dashboard-page', component: DashboardComponent}
  ]
  },
  {path: '', component: LayoutTwoComponent,
   children: [
    {path: 'login-page', component: LoginComponent},
    {path: 'access-page', component: AccessStcComponent},
    {path: 'terms-NDA-page', component: TermsComponent},
   ]
  },
  {path: 'points-and-rules', component: PointsRulesComponent},
  {path: 'redeeming-policy', component: RedeemingPolicyComponent},
  {path: 'list-of-complaints', component: ListComplaintsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
