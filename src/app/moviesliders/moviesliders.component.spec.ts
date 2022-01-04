import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieslidersComponent } from './moviesliders.component';

describe('MovieslidersComponent', () => {
  let component: MovieslidersComponent;
  let fixture: ComponentFixture<MovieslidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieslidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieslidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
