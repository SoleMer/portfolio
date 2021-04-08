import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmTechnologiesComponent } from './sm-technologies.component';

describe('SmTechnologiesComponent', () => {
  let component: SmTechnologiesComponent;
  let fixture: ComponentFixture<SmTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
