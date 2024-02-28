import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaMrpComponent } from './nasa-mrp.component';

describe('NasaMrpComponent', () => {
  let component: NasaMrpComponent;
  let fixture: ComponentFixture<NasaMrpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasaMrpComponent]
    });
    fixture = TestBed.createComponent(NasaMrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
