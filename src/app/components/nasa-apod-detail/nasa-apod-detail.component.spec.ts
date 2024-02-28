import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaApodDetailComponent } from './nasa-apod-detail.component';

describe('NasaApodDetailComponent', () => {
  let component: NasaApodDetailComponent;
  let fixture: ComponentFixture<NasaApodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasaApodDetailComponent]
    });
    fixture = TestBed.createComponent(NasaApodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
