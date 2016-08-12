/*
The point of the UserService is to provide a place where our application can learn about the current
user and also notify the rest of the application if the current user changes.
*/

import {Injectable, bind} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {User} from '../models';


/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
  // `currentUser` contains the current user
  // BehaviourSubject has a special property in that it stores the last value. Meaning that any subscriber to the stream will receive the latest value.
  // subject is like a read/write stream 
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export var userServiceInjectables: Array<any> = [
  bind(UserService).toClass(UserService)
];
