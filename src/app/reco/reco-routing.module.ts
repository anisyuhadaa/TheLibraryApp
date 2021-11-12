import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoPage } from './reco.page';

const routes: Routes = [
  {
    path: '',
    component: RecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoPageRoutingModule {}
