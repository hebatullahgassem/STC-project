import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar.component';
import { SidenavComponent } from './layout/sidenav.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
