import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user/user.model';

@Injectable()
export class UserService {
  private user = new BehaviorSubject<boolean>(false); // create user as behaviour
  cast = this.user.asObservable(); // cast user as observable

  constructor() { }

  User(newUser) {
    this.user.next(newUser);
  }
}