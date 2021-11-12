import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbatePage } from './tbate.page';

const routes: Routes = [
  {
    path: '',
    component: TbatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbatePageRoutingModule {}
