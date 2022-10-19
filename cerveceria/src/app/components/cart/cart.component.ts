import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.cartForm = this.fb.group({
      cart: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

}
