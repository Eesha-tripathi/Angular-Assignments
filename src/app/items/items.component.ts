import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Laptop } from '../interfaces/items';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  incart: boolean=false;
  @Input() laptop: Laptop={} as Laptop;
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }
  addtocart(){
    this.incart=true;
    this.cartservice.adding(this.laptop);
    // this.emitlaptop.emit(this.laptop);
  }
  removefromcart(){
    this.incart=false;
    this.cartservice.remove(this.laptop);
  }
}
