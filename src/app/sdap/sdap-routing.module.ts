import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SdapPage } from './sdap.page';

const routes: Routes = [
  {
    path: '',
    component: SdapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SdapPageRoutingModule {}
