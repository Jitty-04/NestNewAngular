import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsecuritynavComponent } from './adminsecuritynav.component';

describe('AdminsecuritynavComponent', () => {
  let component: AdminsecuritynavComponent;
  let fixture: ComponentFixture<AdminsecuritynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsecuritynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsecuritynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
