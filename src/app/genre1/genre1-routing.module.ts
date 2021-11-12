import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Genre1Page } from './genre1.page';

const routes: Routes = [
  {
    path: '',
    component: Genre1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Genre1PageRoutingModule {}
