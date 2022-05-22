import {Pipe, PipeTransform} from '@angular/core';
import {Customer} from "../model/customer.model";

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(customer: Customer[], searchValue: string): any {

    if (!customer || !searchValue) {
      return customer;
    }
    return customer.filter(customer =>
      customer.fullName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      customer.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      customer.address.city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      customer.address.street.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      customer.address.houseNumber.toString().includes(searchValue.toLocaleLowerCase()) ||
      customer.address.zipCode.toString().includes(searchValue.toLocaleLowerCase())
    );
  }
}
