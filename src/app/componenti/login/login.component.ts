import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  onSubmit(form: NgForm){
    const email = form.value.email;
    const pw = form.value.pw;
    //auth service
  }
}
