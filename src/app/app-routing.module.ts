import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'medicion/:id',
    loadChildren: () => import('./mediciones/mediciones.module').then( m => m.MedicionesPageModule)
  },
  {
    path: 'logs/:id',
    loadChildren: () => import('./logs/logs.module').then( m => m.LogsPageModule)
  },  
  {
    path: 'graficodetalles/:id',
    loadChildren: () => import('./graficodetalles/graficodetalles.module').then( m => m.GraficodetallesPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
