import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() {
  }

  get message(): string {
    return 'Hello World!';
  }
}
