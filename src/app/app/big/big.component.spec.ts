import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigComponent } from './big.component';

describe('BigComponent', () => {
  let component: BigComponent;
  let fixture: ComponentFixture<BigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
