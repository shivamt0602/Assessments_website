import { Component } from '@angular/core';
import { InstructorName } from '../../models/instructors';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  arrInstructors = [
    new InstructorName("Miti Bhat"),
    new InstructorName("Rajshekhar Bhat"),
    new InstructorName("Abhijit Kshirsagar")
  ]
}
