import {Component, OnDestroy, OnInit} from '@angular/core';
import {Customer} from "../model/customer.model";
import {CustomerService} from "../services/customer-service.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public customerList: Customer[];

  constructor(private customerService: CustomerService) {
  }

  public ngOnInit(): void {
    this.customerService.getData();
    this.customerService.customerData.subscribe((customers) => {
      this.customerList = customers;
    })
  }

  // public ngOnDestroy(): void {
  //   this.customerService.customerData.unsubscribe();
  // }
}
