import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubtasksFormComponent } from './add-subtasks-form.component';

describe('AddSubtasksFormComponent', () => {
  let component: AddSubtasksFormComponent;
  let fixture: ComponentFixture<AddSubtasksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSubtasksFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubtasksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
