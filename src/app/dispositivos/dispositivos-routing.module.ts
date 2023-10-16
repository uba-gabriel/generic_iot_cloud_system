import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficodetallesPage } from '../graficodetalles/graficodetalles.page';
import { LogsPage } from '../logs/logs.page';
import { MedicionesPage } from '../mediciones/mediciones.page';
import { DispositivosPage } from './dispositivos.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivosPage,
  },
  {
    path: 'logs/:dev_id',
    component: LogsPage,
  },
  {
    path: 'graficodetalles/:dev_id',
    component: GraficodetallesPage,
  },
  {
    path: 'mediciones/:dev_id',
    component: MedicionesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosPageRoutingModule {}
