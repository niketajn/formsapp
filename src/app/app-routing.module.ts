import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayComponentComponent} from './display-component/display-component.component';
import {InputComponentComponent} from './input-component/input-component.component';
const routes: Routes = [{
    component: DisplayComponentComponent,
    path:''
  },
  {
    component: InputComponentComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
