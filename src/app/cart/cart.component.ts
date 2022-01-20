import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  SeatsComponent!: string;

  bookingForm!: FormGroup;
 


  ngOnInit(): void {
  
  }

  shippingForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]')]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]'),Validators.maxLength(10)]),
  

  })

  get name(){return this.shippingForm.get('name')}
  get email(){return this.shippingForm.get('email')}
  get phoneNumber(){return this.shippingForm.get('phoneNumber')}


}
