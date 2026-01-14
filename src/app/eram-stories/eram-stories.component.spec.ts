import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EramStoriesComponent } from './eram-stories.component';

describe('EramStoriesComponent', () => {
  let component: EramStoriesComponent;
  let fixture: ComponentFixture<EramStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EramStoriesComponent]
    });
    fixture = TestBed.createComponent(EramStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
