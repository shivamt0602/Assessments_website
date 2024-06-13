import { Question } from "./question"

export class Assessment{
    assessmentName : string
    flag : boolean
    id : number
    assessmentNo : number
    assesmentDate : string
    assessmentTime : string
    facultyid : number 
    // questions : Question[]

    constructor(aName:string,answer:boolean,idno:number,asno:number,asdate:string,astime:string,facid:number){
        this.assessmentName = aName
        this.flag = answer
        this.id = idno
        this.assessmentNo = asno
        this.assesmentDate = asdate
        this.assessmentTime = astime
        this.facultyid = facid
        // this.questions = query
    }

}