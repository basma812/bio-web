import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SeatsComponent } from '../seats/seats.component';

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  SeatsComponent!: string;
  items = this.seatsComponent.getItems();
  bookingForm!: FormGroup;
 


  ngOnInit(): void {
  
  }

  shippingForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]')]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]'),Validators.maxLength(10)]),
  
    shippingForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  })

  get name(){return this.shippingForm.get('name')}
  get email(){return this.shippingForm.get('email')}
  get phoneNumber(){return this.shippingForm.get('phoneNumber')}

 
  
  constructor(
    private seatsComponent: SeatsComponent,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.seatsComponent.clearCart();
    console.warn('Your order has been submitted', this.shippingForm.value);
    this.shippingForm.reset();
  }
}
