import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmHomeComponent } from './sm-home.component';

describe('SmHomeComponent', () => {
  let component: SmHomeComponent;
  let fixture: ComponentFixture<SmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
