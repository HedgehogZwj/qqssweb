import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmerComponent } from './warmer.component';

describe('WarmerComponent', () => {
  let component: WarmerComponent;
  let fixture: ComponentFixture<WarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
