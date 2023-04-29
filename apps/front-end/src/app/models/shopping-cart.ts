export interface CartItem{
    productName: string;
    productId: number;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
  }
  
  export interface Cart{
    cartItems: CartItem[];
    totalPrice: number;
  }