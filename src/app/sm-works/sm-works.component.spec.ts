import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmWorksComponent } from './sm-works.component';

describe('SmWorksComponent', () => {
  let component: SmWorksComponent;
  let fixture: ComponentFixture<SmWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
