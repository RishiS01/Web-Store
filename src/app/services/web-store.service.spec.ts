import { TestBed, inject } from '@angular/core/testing';

import { WebStoreService } from './web-store.service';

describe('WebStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebStoreService]
    });
  });

  it('should be created', inject([WebStoreService], (service: WebStoreService) => {
    expect(service).toBeTruthy();
  }));
});
