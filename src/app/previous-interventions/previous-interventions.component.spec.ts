import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousInterventionsComponent } from './previous-interventions.component';

describe('PreviousInterventionsComponent', () => {
  let component: PreviousInterventionsComponent;
  let fixture: ComponentFixture<PreviousInterventionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousInterventionsComponent]
    });
    fixture = TestBed.createComponent(PreviousInterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
