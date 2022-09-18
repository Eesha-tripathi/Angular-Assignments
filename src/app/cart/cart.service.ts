import { Injectable } from '@angular/core';
import { Laptop } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Laptop[]=[];
  constructor() { }
  adding(laptop: Laptop){
    this.cart.push(laptop);
  }
  get(){
    return this.cart;
  }
  remove(laptop: Laptop){
    this.cart = this.cart.filter((l)=> l != laptop);
  }
}
