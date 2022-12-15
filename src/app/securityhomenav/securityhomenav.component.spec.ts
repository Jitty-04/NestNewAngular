import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityhomenavComponent } from './securityhomenav.component';

describe('SecurityhomenavComponent', () => {
  let component: SecurityhomenavComponent;
  let fixture: ComponentFixture<SecurityhomenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityhomenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityhomenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
