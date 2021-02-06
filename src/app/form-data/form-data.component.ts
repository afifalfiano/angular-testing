import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {

  formLogin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  dataLogin = {
    username : 'Afif',
    password : 'Test'
  };

  loggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.formLogin.value.username === this.dataLogin.username && this.formLogin.value.password === this.dataLogin.password ?
    this.loggedIn = true : this.loggedIn = false;
    console.log('Data', this.formLogin.value);
    console.log('FormGroup', this.formLogin);
  }

}
