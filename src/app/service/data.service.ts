import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from '../model/userLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUser: Array<userLogin> = [
    {
      username: 'afif',
      password: '12345',
      address: 'Jogja',
      mobile: '12345'
    }
  ];
  constructor(
  ) { }

  getData(): any {
    return this.dataUser.slice();
  }
}
