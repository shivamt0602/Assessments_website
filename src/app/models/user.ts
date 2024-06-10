export class User{
    id : number
    userName : string
    userTotalMarks : number
    constructor(id:number,uName:string,uMarks:number){
        this.id = id
        this.userName = uName
        this.userTotalMarks = uMarks
    }

}