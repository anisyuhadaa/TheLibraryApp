import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Genre3Page } from './genre3.page';

const routes: Routes = [
  {
    path: '',
    component: Genre3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Genre3PageRoutingModule {}
