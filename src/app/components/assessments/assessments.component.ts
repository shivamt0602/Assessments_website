import { Component } from '@angular/core';

import { Assessment } from '../../models/assessment';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'] // Change `styleUrl` to `styleUrls`
})

export class AssessmentsComponent {

  arrCourses = [
    new Assessment("asgn1", true),
    new Assessment("asgn2", true),
    new Assessment("asgn3", false)
  ];

  // choice: number = 0; 

  // constructor(){
  //   this.choice = 1;
  // }

  // nextchoice(): void {
  //   console.log("inside the function")
  //   this.choice += 1;
  //   if(this.choice > 3){
  //     this.choice = 1;
  //   }
  // }
  
  
}
