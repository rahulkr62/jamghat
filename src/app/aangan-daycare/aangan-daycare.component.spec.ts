import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AanganDaycareComponent } from './aangan-daycare.component';

describe('AanganDaycareComponent', () => {
  let component: AanganDaycareComponent;
  let fixture: ComponentFixture<AanganDaycareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AanganDaycareComponent]
    });
    fixture = TestBed.createComponent(AanganDaycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
