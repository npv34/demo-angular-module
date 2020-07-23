import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  updateUserForm: FormGroup;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder
  ) { }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    let user = this.userService.findById(+this.id)[0];
    this.updateUserForm = this.fb.group({
      name: [user.name, ],
      email: [user.email, ]
    })

  }

  update() {
    let value = this.updateUserForm.value;
    this.userService.update(this.id, value)
    this.router.navigate(['users'])
  }

}
