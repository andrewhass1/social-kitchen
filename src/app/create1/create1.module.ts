import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Create1PageRoutingModule } from './create1-routing.module';

import { Create1Page } from './create1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Create1PageRoutingModule
  ],
  declarations: [Create1Page]
})
export class Create1PageModule {}
