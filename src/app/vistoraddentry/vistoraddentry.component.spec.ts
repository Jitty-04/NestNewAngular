import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistoraddentryComponent } from './vistoraddentry.component';

describe('VistoraddentryComponent', () => {
  let component: VistoraddentryComponent;
  let fixture: ComponentFixture<VistoraddentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistoraddentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistoraddentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
