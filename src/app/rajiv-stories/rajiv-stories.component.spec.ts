import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajivStoriesComponent } from './rajiv-stories.component';

describe('RajivStoriesComponent', () => {
  let component: RajivStoriesComponent;
  let fixture: ComponentFixture<RajivStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RajivStoriesComponent]
    });
    fixture = TestBed.createComponent(RajivStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
