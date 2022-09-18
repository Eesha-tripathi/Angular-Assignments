import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Laptop } from '../interfaces/items';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeservice: HomeService) { }
    
//isDisabled: boolean = false;
searchInput: string = " ";
//isShowing: boolean = true;
cart: Laptop[]=[];

laptops: Laptop[] = [];


// clickHandle()
// {
//   this.isDisabled=true;
// }


ngOnInit(): void {
  this.laptops=this.homeservice.getlaptop();
}

}