import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsearchempComponent } from './adminsearchemp.component';

describe('AdminsearchempComponent', () => {
  let component: AdminsearchempComponent;
  let fixture: ComponentFixture<AdminsearchempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsearchempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsearchempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
