import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BunnyPage } from './bunny.page';

const routes: Routes = [
  {
    path: '',
    component: BunnyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BunnyPageRoutingModule {}
