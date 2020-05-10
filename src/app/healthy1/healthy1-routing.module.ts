import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Healthy1Page } from './healthy1.page';

const routes: Routes = [
  {
    path: '',
    component: Healthy1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Healthy1PageRoutingModule {}
