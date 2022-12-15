import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewswcurityComponent } from './adminviewswcurity.component';

describe('AdminviewswcurityComponent', () => {
  let component: AdminviewswcurityComponent;
  let fixture: ComponentFixture<AdminviewswcurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewswcurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewswcurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
