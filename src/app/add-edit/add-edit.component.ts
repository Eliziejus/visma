import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../model/customer.model";
import {CustomerService} from "../services/customer-service.component";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {



  public customer: FormGroup;
  @Input() public formValue: Customer
  @Output() onSave: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.customer = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(7), Validators.pattern('([A-Z][a-zA-Z])')]],
      email: ['', [Validators.required, Validators.minLength(8), Validators.email]],
      address: this.formBuilder.group({
        city: ['', [Validators.required, Validators.minLength(4)]],
        street: ['', [Validators.required, Validators.minLength(3)]],
        houseNumber: ['', [Validators.required, Validators.minLength(3), Validators.pattern('/^[0-9\\b]+$/')]],
        zipCode: ['', [Validators.required,  Validators.minLength(3), Validators.pattern('/^[0-9\\b]+$/')]],
      })
    });

    if (this.formValue) {
      this.editProfile(this.formValue);
    }
  }

  get controls() {
    return this.customer.controls;
  }

  public submit(): void {
    this.customerService.setData(
      {
        ...this.customer.value,
        id: this.formValue?.id || Math.floor((Math.random() * 100) + 1)
      }
    );
    this.customer.reset();
    this.router.navigate(['/table'])
  }

  public update(): void {
    this.customerService.updateProfile(this.formValue);
    this.customer.reset();
    this.router.navigate(['/table'])
  }

  private editProfile(customer: Customer): void {
    this.customer.patchValue({
      ...customer
    })
  }
}

