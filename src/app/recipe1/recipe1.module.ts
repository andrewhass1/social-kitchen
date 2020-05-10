import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe1PageRoutingModule } from './recipe1-routing.module';

import { Recipe1Page } from './recipe1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe1PageRoutingModule
  ],
  declarations: [Recipe1Page]
})
export class Recipe1PageModule {}
