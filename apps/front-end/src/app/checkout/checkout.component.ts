import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CartItem } from '../models/shopping-cart';
import { ShoppingCartService } from '../services/shopping-cart.service';

interface Payment {
  paymentMode: string | null;
  mobileNo: string | null;
}

interface Address {
  county: string | null;
  town: string | null;
  estate: string | null;
  houseAddress: string | null;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  public paymentMode: string = '';
  public paymentDetails: Payment = {
    paymentMode: '',
    mobileNo: '',
  };
  public addressDetails: Address = {
    county: '',
    town: '',
    estate: '',
    houseAddress: '',
  };
  public cartItems: CartItem[] = [];
  public cartTotal = 0;

  paymentModeFormGroup = this.formBuilder.group({
    paymentMode: ['', Validators.required],
    mobileNo: [''],
  });
  addressFormGroup = this.formBuilder.group({
    county: ['', Validators.required],
    town: ['', Validators.required],
    estate: ['', Validators.required],
    houseAddress: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private cartService: ShoppingCartService,
    private router: Router
  ) {}
  public ngOnInit(): void {
    this.getCartItems();
    this.getCartTotal();
  }
  public generateCheckoutSummary() {
    this.paymentDetails = this.paymentModeFormGroup.getRawValue();
    this.addressDetails = this.addressFormGroup.getRawValue();
  }

  private getCartItems() {
    this.cartItems = this.cartService.getCart();
  }
  private getCartTotal() {
    this.cartTotal = this.cartService.getCartTotal();
  }
  public completeShopping() {
    this.cartService.emptyCart();
    this.router.navigate(['/appreciation']);
  }
}
