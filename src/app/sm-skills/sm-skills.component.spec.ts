import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSkillsComponent } from './sm-skills.component';

describe('SmSkillsComponent', () => {
  let component: SmSkillsComponent;
  let fixture: ComponentFixture<SmSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
