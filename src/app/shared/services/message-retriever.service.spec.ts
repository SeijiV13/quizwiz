import { TestBed } from '@angular/core/testing';

import { MessageRetrieverService } from './message-retriever.service';

describe('MessageRetrieverService', () => {
  let service: MessageRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
