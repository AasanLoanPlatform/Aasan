import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;
  showDialog = false;
  email:any;
  password: any;

  items = [
    {
      email: 'kumar@gmail.com',
      password: '12345'
    },
    {
      email: 'naga@gmail.com',
      password: '67890'
    },
  ]
  constructor(private form: FormBuilder) { }

  ngOnInit() {

    this.userData = this.form.group({
      'email': ['', Validators.required],
    })
    
  }

}
