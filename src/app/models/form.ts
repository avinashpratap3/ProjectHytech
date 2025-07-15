import { FormGroup, FormControl, Validators } from '@angular/forms';

export function createPropertyForm(data: any = {}): FormGroup {
  return new FormGroup({
    propertyName: new FormControl(data.propertyName || '', Validators.required),
    propertyType: new FormControl(data.propertyType || '', Validators.required),
    city: new FormControl(data.city || '', Validators.required),
    address: new FormControl(data.address || '', Validators.required),
    ownerName: new FormControl(data.ownerName || '', Validators.required),
    email: new FormControl(data.email || '', [Validators.required, Validators.email]),
    phone: new FormControl(data.phone || '', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    pricePerNight: new FormControl(data.pricePerNight || '', [
      Validators.required,
      Validators.min(100),
    ]),
    checkIn: new FormControl(data.checkIn || '', Validators.required),
    checkOut: new FormControl(data.checkOut || '', Validators.required),
    image: new FormControl(data.image || '', Validators.required),
    acceptTerms: new FormControl(
      
      
    ),
  });
}