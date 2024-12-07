import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'estudiantes-list',
        loadChildren: () => import('../pages/estudiantes-list/estudiantes-list.module').then(m => m.EstudiantesListPageModule)
      },
      {
        path: 'estudiantes/:id',
        loadChildren: () => import('../pages/estudiante-cursos/estudiante-cursos.module').then(m => m.EstudianteCursosPageModule)
      },
      {
        path: 'solicitud',
        loadChildren: () => import('../pages/solicitud/solicitud.module').then(m => m.SolicitudPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
