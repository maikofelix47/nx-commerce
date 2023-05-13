import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product';
import { CartItem } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private itemsInCart = new BehaviorSubject<number>(this.getCart().length);
  public itemsInCartObs$ = this.itemsInCart.asObservable();
  public no = 0;
  public cart!: CartItem[];

  getItemsInCart(): Observable<number> {
    return this.itemsInCartObs$;
  }
  addItemsToCart(item: Product, quantity: number) {
    const cart: CartItem[] = this.getCart();
    cart.push({
      productName: item.name,
      productId: item.id,
      unitPrice: item.price,
      quantity: quantity,
      totalPrice: 0,
    });

    this.setCart(cart);
  }
  getCart(): CartItem[] {
    const cart = localStorage.getItem('cart') || null;
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  }
  setCart(cart: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart = cart;
    this.itemsInCart.next(this.cart.length);
  }
  updateCart(item: CartItem): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      try {
        const productId = item.productId;
        const newCart = this.getCart();
        const itemIndex = newCart.findIndex((cartItem: CartItem) => {
          return cartItem.productId === productId;
        });

        if (itemIndex >= 0) {
          newCart[itemIndex] = item;
        }

        this.setCart(newCart);
        resolve('Cart has been updated successfully');
      } catch (e) {
        reject(e);
      }
    });
  }
  getCartTotal(): number {
    const cart = this.getCart();
    if (cart.length === 0) return 1;
    return cart
      .map((t: CartItem) => t.unitPrice * t.quantity)
      .reduce((acc, value) => acc + value, 0);
  }
  emptyCart() {
    localStorage.removeItem('cart');
    const cart = this.getCart();
    this.cart = cart;
    this.itemsInCart.next(cart.length);
  }
}
