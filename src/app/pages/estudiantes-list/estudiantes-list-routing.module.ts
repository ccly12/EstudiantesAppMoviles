import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantesListPage } from './estudiantes-list.page';

const routes: Routes = [
  {
    path: '',
    component: EstudiantesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantesListPageRoutingModule {}
