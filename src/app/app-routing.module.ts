import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
      { path: 'customer', component: CustomerComponent, pathMatch: 'full'}
    ]
  },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
