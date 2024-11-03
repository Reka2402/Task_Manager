import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    fullname:'',
    emailAddress:'',
    password:'',
    conformpassword:'',
     role:'',

  };
  onRegister(RegisterForm:any){
    console.log(RegisterForm.value)
  }

}
