import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrazyPageRoutingModule } from './crazy-routing.module';

import { CrazyPage } from './crazy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrazyPageRoutingModule
  ],
  declarations: [CrazyPage]
})
export class CrazyPageModule {}
