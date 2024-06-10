import { Component } from '@angular/core';
import { Assessment } from '../../models/assessment';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.scss'
})

export class AssessmentsComponent {
  arrCourses = [
    new Assessment("asgn1"),
    new Assessment("asgn2"),
    new Assessment("asgn3")
  ]
}
