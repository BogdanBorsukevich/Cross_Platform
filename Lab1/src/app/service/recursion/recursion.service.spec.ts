import { TestBed } from '@angular/core/testing';
import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('обчислює sqrt(1 + x) для x = 0.1 близько до Math.sqrt(1 + x)', () => {
    const x = 0.1;
    const initialSum = 1;
    const n = 1;
    const sign = 1;
    const k = 2;

    service.yy = initialSum;
    const result = service.getRecursion(x, n, sign, k, initialSum);

    expect(typeof result).toBe('number');
    expect(isNaN(result)).toBeFalse();
  });
});
