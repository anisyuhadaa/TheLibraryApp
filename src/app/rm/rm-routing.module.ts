import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RmPage } from './rm.page';

const routes: Routes = [
  {
    path: '',
    component: RmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmPageRoutingModule {}
