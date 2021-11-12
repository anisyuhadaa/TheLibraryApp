import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SdapPageRoutingModule } from './sdap-routing.module';

import { SdapPage } from './sdap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SdapPageRoutingModule
  ],
  declarations: [SdapPage]
})
export class SdapPageModule {}
