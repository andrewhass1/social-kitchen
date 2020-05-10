import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Healthy1PageRoutingModule } from './healthy1-routing.module';

import { Healthy1Page } from './healthy1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Healthy1PageRoutingModule
  ],
  declarations: [Healthy1Page]
})
export class Healthy1PageModule {}
