import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dark1Page } from './dark1.page';

const routes: Routes = [
  {
    path: '',
    component: Dark1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dark1PageRoutingModule {}
