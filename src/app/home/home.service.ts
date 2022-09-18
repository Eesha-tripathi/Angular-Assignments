import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getlaptop(){
    return [
      {
        name: "HP 15s",
        brand: "HP",
        src: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81snY7iZorL._SL1500_.jpg",
        price: 70750
      },
      {
        name: "Microsoft Surface Pro X",
        brand: "microsoft",
        src: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/31RMVSKxpeL._SX300_SY300_QL70_FMwebp_.jpg",
        price: 129990
      },
      {
        name: "ASUS VivoBook 15",
        brand: "asus",
        src: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71S8U9VzLTL._SX679_.jpg",
        price: 33990
      },
      {
        name: "Acer Aspire 3",
        brand: "acer",
        src: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/31C97jbOP4L._SX300_SY300_QL70_FMwebp_.jpg",
        price: 52999
      },
      {
        name: "Lenovo IdeaPad",
        brand: "lenovo",
        src: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61s7sJEpsVL._SL1000_.jpg",
        price: 62390
      }
    ]
  }
}
