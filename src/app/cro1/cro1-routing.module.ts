import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cro1Page } from './cro1.page';

const routes: Routes = [
  {
    path: '',
    component: Cro1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cro1PageRoutingModule {}
