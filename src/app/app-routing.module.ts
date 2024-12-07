import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'estudiantes-list',
    loadChildren: () => import('./pages/estudiantes-list/estudiantes-list.module').then( m => m.EstudiantesListPageModule)
  },
  {
    path: 'estudiante-cursos',
    loadChildren: () => import('./pages/estudiante-cursos/estudiante-cursos.module').then( m => m.EstudianteCursosPageModule)
  },
  {
    path: 'solicitud',
    loadChildren: () => import('./pages/solicitud/solicitud.module').then( m => m.SolicitudPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
