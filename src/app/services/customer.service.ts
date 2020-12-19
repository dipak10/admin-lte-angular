import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit {

  private getCustomerURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit(): void {
    this.getCustomers();
  }

  // tslint:disable-next-line: typedef
  getCustomers(): Observable<any>{
    return this.http.get(this.getCustomerURL);
  }
}
