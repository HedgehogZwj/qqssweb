import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumitureComponent } from './humiture.component';

describe('HumitureComponent', () => {
  let component: HumitureComponent;
  let fixture: ComponentFixture<HumitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
