import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmRepositoriesComponent } from './sm-repositories.component';

describe('SmRepositoriesComponent', () => {
  let component: SmRepositoriesComponent;
  let fixture: ComponentFixture<SmRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
