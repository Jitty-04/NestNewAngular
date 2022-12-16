import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnvistorComponent } from './admnvistor.component';

describe('AdmnvistorComponent', () => {
  let component: AdmnvistorComponent;
  let fixture: ComponentFixture<AdmnvistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnvistorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnvistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
