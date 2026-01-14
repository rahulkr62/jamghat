import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalamStoriesComponent } from './kalam-stories.component';

describe('KalamStoriesComponent', () => {
  let component: KalamStoriesComponent;
  let fixture: ComponentFixture<KalamStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KalamStoriesComponent]
    });
    fixture = TestBed.createComponent(KalamStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
