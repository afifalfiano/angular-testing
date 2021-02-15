import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {
  formLogin: FormGroup;

  dataLogin = [];

  loggedIn = false;
  constructor(
    private dataSvc: DataService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.onInitForm();
    this.getDataLogin();
  }

  onInitForm(): any {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): any {
    this.formLogin.value.username === this.dataLogin[0].username && this.formLogin.value.password === this.dataLogin[0].password ?
      this.loggedIn = true : this.loggedIn = false;
  }

  getDataLogin(): any {
    this.dataLogin = this.dataSvc.getData();
  }

  onClickReset(): any {
    this.loggedIn = false;
  }

}
