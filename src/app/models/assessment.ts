export class Assessment{
    assessmentName : string
    flag : boolean
    id : number
    // assessmentNo : number
    // assesmentDate : string,

    constructor(aName:string,answer:boolean,idno:number,){
        this.assessmentName = aName
        this.flag = answer
        this.id = idno
    }

}