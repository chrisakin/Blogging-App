import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  user: User = {
    firstName: 'Christopher',
    lastName: 'Akintade'
  };
  isLoggedIn: boolean;

  constructor(private usersService:UserService) { }

  ngOnInit()   {
    this.usersService.cast.subscribe(user=> this.isLoggedIn = user);  
  }
    login() {   
       this.isLoggedIn = true;   
       this.usersService.User(this.isLoggedIn); 
       }
    signup() {    
      this.isLoggedIn = true;    
      this.usersService.User(this.isLoggedIn);  
    }
    logout() {    
      this.isLoggedIn = false;    
      this.usersService.User(this.isLoggedIn); 
  }

}
