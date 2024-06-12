import { Component } from '@angular/core';
import { Assessment } from '../../models/assessment';
import { User } from '../../models/user';
import { Language } from '../../models/language';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  assessmentName = "angularv18"
  assessmentNames = ["abc","def","efererf","wfrf","wrfrf"]

  // arrAssessments =[
  //   new Assessment(1,"ROR",100),
  //   new Assessment(2,"Java",100),
  //   new Assessment(3,"Angular V 18",100),
  // ]

  arrUser = [
    new User(1,"shivam",100),
    new User(2,"shahil",100),
    new User(1,"Rashmi",100)
  ]

  // arrLanguages = [
  //   new Language("Java","Assets/images/java.png"),
  //   new Language("Python","Assets/images/python.png"),
  //   new Language("NodeJs","Assets/images/nodeJs.png")
  // ]

  arrLanguages : Language[] = []

  showdetails(aName:string){
    console.log("details here..."+aName)
  }

  constructor(private assessmentService:AssessmentService){
    this.arrLanguages = this.assessmentService.getAssessments()
  }


}
