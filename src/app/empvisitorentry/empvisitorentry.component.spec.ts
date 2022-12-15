import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpvisitorentryComponent } from './empvisitorentry.component';

describe('EmpvisitorentryComponent', () => {
  let component: EmpvisitorentryComponent;
  let fixture: ComponentFixture<EmpvisitorentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpvisitorentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpvisitorentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
