import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

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

  dataLogin = [];

  loggedIn = false;
  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
    this.getDataLogin();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
      this.formLogin.value.username === this.dataLogin[0].username && this.formLogin.value.password === this.dataLogin[0].password ?
      this.loggedIn = true : this.loggedIn = false;
  }

  getDataLogin(): any {
    this.dataLogin = this.dataSvc.getData();
  }

}
