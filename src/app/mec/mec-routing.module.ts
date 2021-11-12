import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MecPage } from './mec.page';

const routes: Routes = [
  {
    path: '',
    component: MecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MecPageRoutingModule {}
