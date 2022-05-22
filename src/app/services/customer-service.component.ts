import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root',
})

export class CustomerService {
  public customerData = new BehaviorSubject<Customer[]>([]);

  public setData(custumer: Customer): void {
    const localData = JSON.parse(localStorage.getItem('customer') || '[]');
    localData.push(custumer);
    this.customerData.next(localData);
    localStorage.setItem('customer', JSON.stringify(localData));
  }

  public getData(): void {
    const localData = JSON.parse(localStorage.getItem('customer') || '[]');
    this.customerData.next(localData);
  }

  public getCustomerById(id: number): Customer{
    if (this.customerData.getValue().length === 0) {
      this.getData();
    }
    const data = (JSON.parse(localStorage.getItem('customer') || '[]') as Customer[]).find((item) => item.id === id);
    if (!data) {
      return {} as Customer
    }
    return data;
  }

  public deleteAllCustomers(): void {
    localStorage.removeItem('customer');
    this.customerData.next([]);
  }

  public updateProfile(customer: Customer): void {
    const customers = JSON.parse(localStorage.getItem('customer') || '[]');
    customers.forEach((customerItem: Customer) => {
      if (customerItem.id === customer.id) {
        customerItem = customer;
      }
    });
    this.customerData.next(customers);
    // localStorage.setItem('customer', JSON.stringify(customer));
    debugger;
  }
}
