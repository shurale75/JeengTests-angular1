import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  inputTest = 'inputTest'
  user: User = {firstName: 'Dima', lastName: 'Lastname'}
}

export interface User {
  firstName:string;
  lastName:string;
}
