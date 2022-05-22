import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../model/customer.model";
import {CustomerService} from "../services/customer-service.component";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() customersTable: Customer[];

  public searchValue: string
  public rowId: number;
  public latitude = 51.678418;
  public longitude = 7.809007;

  constructor(
    private customerService: CustomerService, private router: Router) {
  }

  public ngOnInit(): void {
  }

  public deleteProfileItem(id: number): void {
    this.rowId = id;
    this.customersTable.splice(this.rowId, 1);
    localStorage.setItem('customer', JSON.stringify(this.customersTable))
  }

  public editCustomer(id: number): void {
    this.router.navigate(['/edit', id])
  }

  public addCustomer(): void {
    this.router.navigate(['/add']);
  }

  public deleteAll(): void {
    this.customerService.deleteAllCustomers();
  }

  // public initLat(): void {
  //   let geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({
  //     "address": 'Kaunas'
  //   }, function(results: { geometry: { location: any; }; }[]) {
  //     console.log(results[0].geometry.location); //LatLng
  //   });
  //
  // }

}
