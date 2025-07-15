import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelData {
  private localStorageKey = 'hotelList';

  constructor() { 
    
    this.hotels = this.loadHotelsFromStorage(); 
  
  }
  hotels: any[] = [];

  private loadHotelsFromStorage(): any[] {
  if (typeof window !== 'undefined' && localStorage.getItem(this.localStorageKey)) {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }
  return this.getInitialHotels();  
}

  private saveHotelsToStorage() {
  if (typeof window !== 'undefined') {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.hotels));
  }
}
  private getInitialHotels(){
    return [
  {
    id: 1,
    name: 'Grand Palace Hotel',
    city: 'New Delhi',
    country: 'India',
    pricePerNight: 2499,
    image: 'https://i.pinimg.com/1200x/3a/7e/45/3a7e45f4b521460e93c6cdd9186da2f0.jpg',
    roomTypes: 4,
    amenities: {
      wifi: true,
      parking: true,
      pool: true,
      restaurant: true
    }
  },
  {
    id: 2,
    name: 'Sunrise Villa',
    city: 'Jaipur',
    country: 'India',
    pricePerNight: 1799,
    image: 'https://i.pinimg.com/736x/a0/63/45/a06345a493fa96bcad256051648288ae.jpg',
    roomTypes: 3,
    amenities: {
      wifi: true,
      parking: true,
      restaurant: false,
      pool: false
    }
  },
  {
    id: 3,
    name: 'Blue Lagoon Resort',
    city: 'Goa',
    country: 'India',
    pricePerNight: 3299,
    image: 'https://i.pinimg.com/736x/a0/63/45/a06345a493fa96bcad256051648288ae.jpg',
    roomTypes: 5,
    amenities: {
      wifi: true,
      parking: true,
      pool: true,
      gym: true
    }
  },
  {
    id: 4,
    name: 'Royal Heritage Inn',
    city: 'Udaipur',
    country: 'India',
    pricePerNight: 2100,
    image: 'https://i.pinimg.com/1200x/12/bb/84/12bb8472c9f9f362d9a665ec737c9e60.jpg',
    roomTypes: 2,
    amenities: {
      wifi: false,
      parking: true,
      pool: false,
      restaurant: true
    }
  },
  {
    id: 5,
    name: 'Cloud Nine Guesthouse',
    city: 'Manali',
    country: 'India',
    pricePerNight: 1399,
    image: 'https://i.pinimg.com/736x/a3/d5/02/a3d5020b1113c8534279bafd34dafbe9.jpg',
    roomTypes: 2,
    amenities: {
      wifi: true,
      parking: false,
      restaurant: false,
      pool: false
    }
  },
  {
    id: 6,
    name: 'Grand Palace Hotel',
    city: 'New Delhi',
    country: 'India',
    pricePerNight: 2499,
    image: 'https://i.pinimg.com/1200x/3a/7e/45/3a7e45f4b521460e93c6cdd9186da2f0.jpg',
    roomTypes: 4,
    amenities: {
      wifi: true,
      parking: true,
      pool: true,
      restaurant: true
    }
  },
  {
    id: 7,
    name: 'Sunrise Villa',
    city: 'Jaipur',
    country: 'India',
    pricePerNight: 1799,
    image: 'https://i.pinimg.com/736x/a0/63/45/a06345a493fa96bcad256051648288ae.jpg',
    roomTypes: 3,
    amenities: {
      wifi: true,
      parking: true,
      restaurant: false,
      pool: false
    }
  },
  {
    id: 8,
    name: 'Blue Lagoon Resort',
    city: 'Goa',
    country: 'India',
    pricePerNight: 3299,
    image: 'https://i.pinimg.com/736x/a0/63/45/a06345a493fa96bcad256051648288ae.jpg',
    roomTypes: 5,
    amenities: {
      wifi: true,
      parking: true,
      pool: true,
      gym: true
    }
  },
  {
    id: 9,
    name: 'Royal Heritage Inn',
    city: 'Udaipur',
    country: 'India',
    pricePerNight: 2100,
    image: 'https://i.pinimg.com/1200x/12/bb/84/12bb8472c9f9f362d9a665ec737c9e60.jpg',
    roomTypes: 2,
    amenities: {
      wifi: false,
      parking: true,
      pool: false,
      restaurant: true
    }
  },
  {
    id: 10,
    name: 'Cloud Nine Guesthouse',
    city: 'Manali',
    country: 'India',
    pricePerNight: 1399,
    image: 'https://i.pinimg.com/736x/a3/d5/02/a3d5020b1113c8534279bafd34dafbe9.jpg',
    roomTypes: 2,
    amenities: {
      wifi: true,
      parking: false,
      restaurant: false,
      pool: false
    }
  },{
    id: 11,
    name: 'Grand Palace Hotel',
    city: 'New Delhi',
    country: 'India',
    pricePerNight: 2499,
    image: 'https://i.pinimg.com/1200x/1f/eb/b3/1febb3372bf878e6be930d198ffdd286.jpg',
    roomTypes: 4,
    amenities: {
      wifi: true,
      parking: true,
      pool: true,
      restaurant: true
    }
  },
  {
    id: 12,
    name: 'Sunrise Villa',
    city: 'Jaipur',
    country: 'India',
    pricePerNight: 1799,
    image: 'https://i.pinimg.com/736x/a0/63/45/a06345a493fa96bcad256051648288ae.jpg',
    roomTypes: 3,
    amenities: {
      wifi: true,
      parking: true,
      restaurant: false,
      pool: false
    }
  },
  {
    id: 13,
    name: 'Blue Lagoon Resort',
    city: 'Goa',
    country: 'India',
    pricePerNight: 3299,
    image: 'https://i.pinimg.com/736x/a0/63/45/a06345a493fa96bcad256051648288ae.jpg',
    roomTypes: 5,
    amenities: {
      wifi: true,
      parking: true,
      pool: true,
      gym: true
    }
  },
  {
    id: 14,
    name: 'Royal Heritage Inn',
    city: 'Udaipur',
    country: 'India',
    pricePerNight: 2100,
    image: 'https://i.pinimg.com/1200x/12/bb/84/12bb8472c9f9f362d9a665ec737c9e60.jpg',
    roomTypes: 2,
    amenities: {
      wifi: false,
      parking: true,
      pool: false,
      restaurant: true
    }
  },
  {
    id: 15,
    name: 'Cloud Nine Guesthouse',
    city: 'Manali',
    country: 'India',
    pricePerNight: 1399,
    image: 'https://i.pinimg.com/736x/a3/d5/02/a3d5020b1113c8534279bafd34dafbe9.jpg',
    roomTypes: 2,
    amenities: {
      wifi: true,
      parking: false,
      restaurant: false,
      pool: false
    }
  }
];
  }


  getHotels() {
    return this.hotels;
  }
  getHotelById(id: number) {
    return this.hotels.find(hotel => hotel.id === id);
  }
  sethotel(newHotel:any){
     this.hotels.push(newHotel);
     this.saveHotelsToStorage();
  }
   updateHotel(updatedHotel: any): void {
    const index = this.hotels.findIndex(h => h.id === updatedHotel.id);
    if (index !== -1) {
      this.hotels[index] = { ...this.hotels[index], ...updatedHotel };
    } else {
      console.warn('Hotel not found:', updatedHotel.id);
    }
     this.saveHotelsToStorage();

  }
}
