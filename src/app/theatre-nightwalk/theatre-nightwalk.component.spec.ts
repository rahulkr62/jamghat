import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreNightwalkComponent } from './theatre-nightwalk.component';

describe('TheatreNightwalkComponent', () => {
  let component: TheatreNightwalkComponent;
  let fixture: ComponentFixture<TheatreNightwalkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheatreNightwalkComponent]
    });
    fixture = TestBed.createComponent(TheatreNightwalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
