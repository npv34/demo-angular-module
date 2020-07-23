import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'add', component: UserAddComponent},
  {path: ':id/edit', component: UserEditComponent}

];

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class UsersModule {
}
