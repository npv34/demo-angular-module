import {Injectable} from '@angular/core';
import {IUser} from "../users/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected users: IUser[] = [
    {
      id: 1,
      name: 'long',
      email: 'long@gmail.com'
    },
    {
      id: 2,
      name: 'name',
      email: 'nam@gmail.com'
    },
    {
      id: 3,
      name: 'quan',
      email: 'quan@gmail.com'
    },
  ]

  constructor() {
  }

  getAll() :IUser[] {
    return this.users;
  }

  findById(id: Number) {
    return this.users.filter(user => {
      return user.id == id;
    })
  }

  getIndex(id: number) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  update(id, data) {
    let userUpdate = this.findById(id)[0];
    userUpdate.name = data.name;
    userUpdate.email = data.email;

    let indexOfUserUpdate = this.getIndex(id);
    if (indexOfUserUpdate != -1) {
      this.users[indexOfUserUpdate] = userUpdate;
    }
  }
}
