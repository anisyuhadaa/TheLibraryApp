import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Genre4Page } from './genre4.page';

const routes: Routes = [
  {
    path: '',
    component: Genre4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Genre4PageRoutingModule {}
