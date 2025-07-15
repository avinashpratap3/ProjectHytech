import { TestBed } from '@angular/core/testing';

import { HotelData } from './hotel-data.service';

describe('HotelData', () => {
  let service: HotelData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
