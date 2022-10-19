import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {Testcomp1Component} from "./testcomp1/testcomp1.component";
import {Testcomp2Component} from "./testcomp2/testcomp2.component";

const routes: Routes = [
  { path: 'Test1', component: Testcomp1Component, data: {user: {firstName:'Dimaroute', lastName:'Lastnameroute'}}},
  { path: 'Test2', component: Testcomp2Component}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
