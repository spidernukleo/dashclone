import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  onSubmit(form: NgForm){
    const email = form.value.email;
    const pw = form.value.pw;
    //auth service
  }
}
