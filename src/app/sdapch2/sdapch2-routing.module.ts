import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sdapch2Page } from './sdapch2.page';

const routes: Routes = [
  {
    path: '',
    component: Sdapch2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sdapch2PageRoutingModule {}
