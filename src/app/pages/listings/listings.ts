import { Component,EventEmitter,Input, Output } from '@angular/core';
import { HotelData } from '../../hotel-data.service';
import { Card } from '../../component/card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listings',
  imports: [Card,CommonModule],
  templateUrl: './listings.html',
  styleUrl: './listings.css'
})
export class Listings {
 constructor(private hotelDataService: HotelData) {}
hotelList: any[]=[];
// @Output() hotelSelected = new EventEmitter<any>();

 
 ngOnInit() {
  this.hotelList = this.hotelDataService.getHotels();
  // console.log('hotelList:', this.hotelList); 
}

}
