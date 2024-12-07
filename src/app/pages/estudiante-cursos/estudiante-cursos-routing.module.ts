import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteCursosPage } from './estudiante-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteCursosPageRoutingModule {}
