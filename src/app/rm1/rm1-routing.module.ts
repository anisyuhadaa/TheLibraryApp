import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rm1Page } from './rm1.page';

const routes: Routes = [
  {
    path: '',
    component: Rm1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rm1PageRoutingModule {}
