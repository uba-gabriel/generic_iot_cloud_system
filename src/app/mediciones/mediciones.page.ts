import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  mediciones: any[] = []; 
  public dev_id: any;
  batchSize: number = 20; // Tamaño del lote
  batchCount: number = 1; // Contador de lotes

  // Método para cargar el siguiente lote de registros
  cargarSiguienteLote() {
    this.batchCount++;
  }

  // Método para cargar el lote anterior de registros
  cargarLoteAnterior() {
    if (this.batchCount > 1) {
      this.batchCount--;
    }
  }

  constructor(private router: ActivatedRoute, private _dispositivoService: DispositivoService) {}

  ngOnInit() {
    this.dev_id = this.router.snapshot.paramMap.get('dev_id');
    console.log('idDispositivo:'+this.dev_id);
    this.obtenerMediciones();
  }

  async obtenerMediciones() {
    console.log("Estoy en obtenerMediciones");
    try {
      this.mediciones = await this._dispositivoService.getMediciones(this.dev_id);
    } catch (error) {
      console.log(error);
    }
  }

}