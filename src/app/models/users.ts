import { Address } from "./address"

export class Users{

    firstName : string 
    lastName : string 
    // address : Address
    email : string 
    mobile : string 
    password : string 
    dob : string
    role : string

    constructor(fname : string,lname : string,mail : string,phone : string,key:string,bd:string,work:string){
       this.firstName = fname
       this.lastName = lname
    //    this.address = addy
       this.email = mail
       this.mobile = phone 
       this.password = key 
       this.dob = bd
       this.role = work
    }

}