import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/customer.model";
import {CustomerService} from "../services/customer-service.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public customerData: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  public ngOnInit(): void {
    this.customerData = this.customerService.getCustomerById(parseInt(this.route.snapshot.params['id'], 10));
  }

    // public updateCustomer(customer: Customer): void {
    //   this.customerService.updateProfile(customer);
    //   this.router.navigate(['/table']);
    // }

}
