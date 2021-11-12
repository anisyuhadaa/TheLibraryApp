import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Genre2Page } from './genre2.page';

const routes: Routes = [
  {
    path: '',
    component: Genre2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Genre2PageRoutingModule {}
