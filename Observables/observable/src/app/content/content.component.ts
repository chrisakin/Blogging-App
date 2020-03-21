import { Component, OnInit } from '@angular/core';
import { User} from '../user/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  user: User = {
    firstName: 'Christopher',
    lastName: 'Akintade'
  };
  isLoggedIn: boolean;
  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.usersService.cast.subscribe(user => this.isLoggedIn = user);    
    this.isLoggedIn = false;  
  }
    login() {    
      this.isLoggedIn = true;    
      this.usersService.User(this.isLoggedIn); 
     }
    logout() {    
      this.isLoggedIn = false;    
      this.usersService.User(this.isLoggedIn);  
    }  
  }


