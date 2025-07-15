import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HotelData } from '../../hotel-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.html',
  imports:[ReactiveFormsModule],
  styleUrls: ['./edit.css']
})
export class EditComponent implements OnInit {
  hotelForm!: FormGroup;
  hotelId!: number;
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service:HotelData,
  ) {}

  ngOnInit(){
    this.hotelId = Number(this.route.snapshot.paramMap.get('id'));
    const hotel = this.service.getHotelById(this.hotelId);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    
    if (hotel) {
      this.hotelForm = this.fb.group({
        name: [hotel.name],
        city: [hotel.city],
        country: [hotel.country],
        pricePerNight: [hotel.pricePerNight],
        image: [hotel.image],
        roomTypes: [hotel.roomTypes],
        amenities: this.fb.group({
          wifi: [hotel.amenities.wifi],
          parking: [hotel.amenities.parking],
          pool: [hotel.amenities.pool],
          restaurant: [hotel.amenities.restaurant],
          gym: [hotel.amenities?.gym || false]
        })
      });
    }
  }

  onSubmit(){
    const updatedHotel = {
      id: this.hotelId,
      ...this.hotelForm.value
    };

    this.service.updateHotel(updatedHotel);
    

    this.router.navigate(['/listings']); 
  }
}
