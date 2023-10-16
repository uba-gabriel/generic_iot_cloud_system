import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {
  dispositivos: any[] = [];

  public dev_id: any;

  constructor(
    private _dispositivoService: DispositivoService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dev_id = this.router.snapshot.paramMap.get('dev_id');
    console.log('idDispositivo:' + this.dev_id);
    this.obtenerDispositivos();
  }

  async obtenerDispositivos() {
    try {
      this.dispositivos =
        await this._dispositivoService.getListadoDispositivos();
    } catch (error) {
      console.log(error);
    }
  }
}
