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
  //]

  constructor() { 

    this.arrLanguages = [
      new Language("Java","Assets/images/java.png",1),
      new Language("Python","Assets/images/python.png",2),
      new Language("NodeJs","Assets/images/nodeJs.png",3)
    ]

  }

  getAssessments(){
    return this.arrLanguages;
  }

  getAssessmentById(id:number){

    for(var i=0;i<this.arrLanguages.length;i++){

      if(id == this.arrLanguages[i].id){
        return this.arrLanguages[i]
      }
    }

    return new Language("",'',0) // just for return sake(which is an object)

  }
  

}
