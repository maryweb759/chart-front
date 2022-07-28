import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatinComponent } from './navigatin.component';

describe('NavigatinComponent', () => {
  let component: NavigatinComponent;
  let fixture: ComponentFixture<NavigatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
