import { TestBed, inject } from '@angular/core/testing';

import { MastermindService } from './mastermind.service';

describe('MastermindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MastermindService]
    });
  });

  it('should ...', inject([MastermindService], (service: MastermindService) => {
    expect(service).toBeTruthy();
  }));
});
