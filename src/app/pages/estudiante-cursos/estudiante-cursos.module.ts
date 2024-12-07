import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudianteCursosPageRoutingModule } from './estudiante-cursos-routing.module';

import { EstudianteCursosPage } from './estudiante-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudianteCursosPageRoutingModule
  ],
  declarations: [EstudianteCursosPage]
})
export class EstudianteCursosPageModule {}
