import { Injectable } from '@angular/core';
import { Language } from '../models/language';


@Injectable({
  providedIn: 'root'
})

export class AssessmentService {

  arrLanguages : Language[] = []

  // arrLanguages = [
  //   new Language("Java","Assets/images/java.png"),
  //   new Language("Python","Assets/images/python.png"),
  //   new Language("NodeJs","Assets/images/nodeJs.png")
  // ]

  constructor() { 
    this.arrLanguages = [
      new Language("Java","Assets/images/java.png"),
      new Language("Python","Assets/images/python.png"),
      new Language("NodeJs","Assets/images/nodeJs.png")
    ]
  }

  getAssessments(){
    return this.arrLanguages;
  }

  // getAssessmentByName(name:string){

  //   for(let i=0;i<this.arrLanguages.length;i++){
  //     if(name == this.arrLanguages[i].language){
  //       return this.arrLanguages[i]
  //     }
  //   }


  // }
  

}
