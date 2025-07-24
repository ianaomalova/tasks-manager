import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProgressComponent } from './small-progress.component';

describe('SmallProgressComponent', () => {
  let component: SmallProgressComponent;
  let fixture: ComponentFixture<SmallProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
