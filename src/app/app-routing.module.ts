import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent , data: { title: 'Home' } },
  { path:'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
