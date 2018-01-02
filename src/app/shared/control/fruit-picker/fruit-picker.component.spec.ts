import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitPickerComponent } from './fruit-picker.component';

describe('FruitPickerComponent', () => {
  let component: FruitPickerComponent;
  let fixture: ComponentFixture<FruitPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
