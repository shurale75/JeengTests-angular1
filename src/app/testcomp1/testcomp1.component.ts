import {Component, Input, OnInit} from '@angular/core';
import {User} from "../app.component";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-testcomp1',
  templateUrl: './testcomp1.component.html',
  styleUrls: ['./testcomp1.component.css']
})
export class Testcomp1Component implements OnInit {

  data1 = 'data1xxx';

  @Input() user: User = {firstName:'', lastName:''};

  constructor(
    private actRoute: ActivatedRoute
  ) {
    console.log('constructor user:', this.user);
  }

  ngOnInit(): void {
    console.log('oninit actRoute:', this.actRoute);

    this.actRoute.data.subscribe(data => {
      console.log('DATA:', data);
      this.user = data['user'];
    })
  }

  getData() {
    console.log('this.data:', this.data1)
  }

}
