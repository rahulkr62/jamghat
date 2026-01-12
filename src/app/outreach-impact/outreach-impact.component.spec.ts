import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachImpactComponent } from './outreach-impact.component';

describe('OutreachImpactComponent', () => {
  let component: OutreachImpactComponent;
  let fixture: ComponentFixture<OutreachImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutreachImpactComponent]
    });
    fixture = TestBed.createComponent(OutreachImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
