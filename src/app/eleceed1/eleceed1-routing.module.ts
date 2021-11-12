import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eleceed1Page } from './eleceed1.page';

const routes: Routes = [
  {
    path: '',
    component: Eleceed1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eleceed1PageRoutingModule {}
