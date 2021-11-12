import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Solo1Page } from './solo1.page';

const routes: Routes = [
  {
    path: '',
    component: Solo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Solo1PageRoutingModule {}
