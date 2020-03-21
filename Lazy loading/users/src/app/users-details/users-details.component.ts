import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { Users } from "../model/users.model";
import { UsersListService } from "../service/users-list.service";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  user: Users;
  constructor(private router: Router, private route: ActivatedRoute, private usersService: UsersListService) { }

  ngOnInit() {

    this.usersService.getUser(this.route.snapshot.params["id"]).subscribe((user: any) => {
      this.user = user;
    });


  }

  onBack() {
    //navigate back to user listing page
    this.router.navigateByUrl('/userslist');
  }

}
