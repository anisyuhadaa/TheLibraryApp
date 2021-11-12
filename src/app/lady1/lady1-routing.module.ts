import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lady1Page } from './lady1.page';

const routes: Routes = [
  {
    path: '',
    component: Lady1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lady1PageRoutingModule {}
