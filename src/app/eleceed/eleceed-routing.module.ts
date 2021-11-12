import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleceedPage } from './eleceed.page';

const routes: Routes = [
  {
    path: '',
    component: EleceedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleceedPageRoutingModule {}
