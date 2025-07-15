import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { createPropertyForm } from '../../models/form';
import { HotelData } from '../../hotel-data.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register{
 propertyForm: FormGroup = createPropertyForm();

constructor(private router: Router,private service:HotelData) {}

onsubmit(){
   if (this.propertyForm.valid) {
      const form = this.propertyForm.value;

      const newHotel = {
        id: this.service.getHotels().length + 1,
        name: form.propertyName,
        city: form.city,
        country: 'India', 
        pricePerNight: Number(form.pricePerNight),
        image:  form.image || 'https://i.pinimg.com/1200x/f3/ea/39/f3ea39ba4b8c45dac06a919ca62fa310.jpg',
        roomTypes: 3, 
        type: form.propertyType, 
        address: form.address,
        owner: form.ownerName,
        contact: {
          email: form.email,
          phone: form.phone
        },
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        amenities: {
          wifi: true,
          parking: true,
          pool: false,
          restaurant: false,
          gym: false
        }
      };

      this.service.sethotel(newHotel);

      
      
      this.router.navigate(['/listings']);
    } else {
      this.propertyForm.markAllAsTouched();
    }
}

}
