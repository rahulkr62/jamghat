import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraanganComponent } from './praangan.component';

describe('PraanganComponent', () => {
  let component: PraanganComponent;
  let fixture: ComponentFixture<PraanganComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraanganComponent]
    });
    fixture = TestBed.createComponent(PraanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
