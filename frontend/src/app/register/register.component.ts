import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', // Provide a single string value here
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  firstname:String="";
  lastname:String="";
  email:String="";
  password:String="";

  constructor(private http:HttpClient){}
  
  ngOnInit():void{

  }

  register(){
    let bodydata={
      "firstname":this.firstname,
      "lastname":this.lastname,
      "email":this.email,
      "password":this.password
    };
    this.http.post("http://localhost:9002/user/create",bodydata).subscribe((resultdata:any)=>{
      console.log(resultdata);
      alert("registered successfully");
    })
  }

  save(){
    this.register();
  }
  

}
