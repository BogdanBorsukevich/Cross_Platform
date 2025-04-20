import { TestBed } from '@angular/core/testing';
import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Табулювання значення x = 0.1, y ≈ sqrt(1 + x)', () => {
    const x = 0.1;
    const expectedY = Math.sqrt(1 + x);

    const result = service.getTab(0.1, 0.1, 0.1);

    const index = result.x.indexOf(x.toFixed(2));
    const actualY = result.y[index];

    expect(Number(actualY.toFixed(4))).toBe(Number(expectedY.toFixed(4)));
  });
});
