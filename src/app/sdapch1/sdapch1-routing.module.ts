import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sdapch1Page } from './sdapch1.page';

const routes: Routes = [
  {
    path: '',
    component: Sdapch1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sdapch1PageRoutingModule {}
