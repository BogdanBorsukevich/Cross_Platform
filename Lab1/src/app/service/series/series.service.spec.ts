import { TestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду для значення x = 0.1 дорівнює приблизно 1.0488', () => {
    const x = 0.1;
    const expectedY = 1.0488;
    const actualY = service.getSeries(x);

    expect(Number(actualY.toFixed(4))).toBe(Number(expectedY.toFixed(4)));
  });
});
