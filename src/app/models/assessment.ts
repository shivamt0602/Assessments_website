export class Assessment{
    assessmentName : string
    flag : boolean
    constructor(aName:string,answer:boolean){
        this.assessmentName = aName
        this.flag = answer
    }

}