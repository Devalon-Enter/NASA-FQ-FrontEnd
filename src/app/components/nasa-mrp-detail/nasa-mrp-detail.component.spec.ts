import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaMrpDetailComponent } from './nasa-mrp-detail.component';

describe('NasaMrpDetailComponent', () => {
  let component: NasaMrpDetailComponent;
  let fixture: ComponentFixture<NasaMrpDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasaMrpDetailComponent]
    });
    fixture = TestBed.createComponent(NasaMrpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
