import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServdemoComponent } from './servdemo.component';

describe('ServdemoComponent', () => {
  let component: ServdemoComponent;
  let fixture: ComponentFixture<ServdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServdemoComponent]
    });
    fixture = TestBed.createComponent(ServdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
