import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsresultsComponent } from './assessmentsresults.component';

describe('AssessmentsresultsComponent', () => {
  let component: AssessmentsresultsComponent;
  let fixture: ComponentFixture<AssessmentsresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessmentsresultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentsresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
