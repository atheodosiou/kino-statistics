/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KinoServiceService } from './kino-service.service';

describe('Service: KinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KinoServiceService]
    });
  });

  it('should ...', inject([KinoServiceService], (service: KinoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
