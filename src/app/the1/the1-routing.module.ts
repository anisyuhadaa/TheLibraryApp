import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { The1Page } from './the1.page';

const routes: Routes = [
  {
    path: '',
    component: The1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class The1PageRoutingModule {}
