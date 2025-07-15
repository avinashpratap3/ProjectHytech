import { Component, Input } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { HotelData } from '../../hotel-data.service';
@Component({
  selector: 'app-hotel-detail',
  imports: [NgStyle,NgIf,RouterLink],
  templateUrl: './hotel-detail.html',
  styleUrl: './hotel-detail.css'
})
export class HotelDetail {
    hotel: any;

  constructor(private route: ActivatedRoute,private hotelDataService: HotelData) {}

  ngOnInit(){
    
    
    if (typeof window !== 'undefined') {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  
    const id = Number(this.route.snapshot.paramMap.get('id'));

   
    

    this.hotel = this.hotelDataService.getHotelById(id);
  }
}
