import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrueduPage } from './truedu.page';

const routes: Routes = [
  {
    path: '',
    component: TrueduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrueduPageRoutingModule {}
