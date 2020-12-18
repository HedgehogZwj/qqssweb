import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhumComponent } from './addhum.component';

describe('AddhumComponent', () => {
  let component: AddhumComponent;
  let fixture: ComponentFixture<AddhumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
