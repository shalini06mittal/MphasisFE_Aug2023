import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogformComponent } from './blogform.component';

describe('BlogformComponent', () => {
  let component: BlogformComponent;
  let fixture: ComponentFixture<BlogformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogformComponent]
    });
    fixture = TestBed.createComponent(BlogformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
