import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Truedu1Page } from './truedu1.page';

const routes: Routes = [
  {
    path: '',
    component: Truedu1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Truedu1PageRoutingModule {}
