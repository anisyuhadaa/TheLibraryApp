import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TbatePageRoutingModule } from './tbate-routing.module';

import { TbatePage } from './tbate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TbatePageRoutingModule
  ],
  declarations: [TbatePage]
})
export class TbatePageModule {}
