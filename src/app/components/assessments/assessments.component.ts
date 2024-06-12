import { Component } from '@angular/core';

import { Assessment } from '../../models/assessment';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'] // Change `styleUrl` to `styleUrls`
})

export class AssessmentsComponent {

  arrCourses = [
    new Assessment("asgn1", true,1),
    new Assessment("asgn2", true,2),
    new Assessment("asgn3", false,3)
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

  classObj={
    bordered:false
  };


  isBordered : boolean = false

  // isBordered : boolean = this.classObj.bordered;

  constructor(){
    this.isBordered = true;
    // this.classList = ['blue','round'];
    this.toggleBorder = function(){
      this.isBordered = !this.isBordered;
      this.classObj = {
        bordered : this.isBordered
      }
    };
  }

  // classList : string[]

  // toggleBorder():void{
    
  //   this.isBordered = !this.isBordered;

  //   this.classObj = {
  //     bordered : this.isBordered
  //   }

  // };

  toggleBorder():void{}


  
}
