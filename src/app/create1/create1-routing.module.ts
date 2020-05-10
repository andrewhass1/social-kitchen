import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Create1Page } from './create1.page';

const routes: Routes = [
  {
    path: '',
    component: Create1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Create1PageRoutingModule {}
