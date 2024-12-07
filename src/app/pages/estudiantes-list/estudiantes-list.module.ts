import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiantesListPageRoutingModule } from './estudiantes-list-routing.module';

import { EstudiantesListPage } from './estudiantes-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiantesListPageRoutingModule
  ],
  declarations: [EstudiantesListPage]
})
export class EstudiantesListPageModule {}
