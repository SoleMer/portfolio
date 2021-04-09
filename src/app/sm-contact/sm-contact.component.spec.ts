import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmContactComponent } from './sm-contact.component';

describe('SmContactComponent', () => {
  let component: SmContactComponent;
  let fixture: ComponentFixture<SmContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
