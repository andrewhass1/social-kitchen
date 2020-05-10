import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe1Page } from './recipe1.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe1PageRoutingModule {}
