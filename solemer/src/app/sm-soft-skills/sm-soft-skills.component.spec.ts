import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSoftSkillsComponent } from './sm-soft-skills.component';

describe('SmSoftSkillsComponent', () => {
  let component: SmSoftSkillsComponent;
  let fixture: ComponentFixture<SmSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmSoftSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
