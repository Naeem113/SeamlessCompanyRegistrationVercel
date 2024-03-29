import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBodyComponent } from './step-body.component';

describe('StepBodyComponent', () => {
  let component: StepBodyComponent;
  let fixture: ComponentFixture<StepBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
