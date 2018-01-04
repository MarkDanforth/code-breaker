import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldFruitComponent } from './old-fruit.component';

describe('OldFruitComponent', () => {
  let component: OldFruitComponent;
  let fixture: ComponentFixture<OldFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
