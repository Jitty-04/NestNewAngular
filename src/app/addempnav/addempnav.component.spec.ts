import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempnavComponent } from './addempnav.component';

describe('AddempnavComponent', () => {
  let component: AddempnavComponent;
  let fixture: ComponentFixture<AddempnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddempnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddempnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
