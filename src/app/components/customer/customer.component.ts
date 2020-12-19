import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response;
    });
  }
}
