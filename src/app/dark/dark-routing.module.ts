import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkPage } from './dark.page';

const routes: Routes = [
  {
    path: '',
    component: DarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkPageRoutingModule {}
