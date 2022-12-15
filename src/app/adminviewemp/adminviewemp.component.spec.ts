import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewempComponent } from './adminviewemp.component';

describe('AdminviewempComponent', () => {
  let component: AdminviewempComponent;
  let fixture: ComponentFixture<AdminviewempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
