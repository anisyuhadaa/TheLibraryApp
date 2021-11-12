import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tbate1Page } from './tbate1.page';

const routes: Routes = [
  {
    path: '',
    component: Tbate1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tbate1PageRoutingModule {}
