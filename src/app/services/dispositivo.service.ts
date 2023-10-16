import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DispositivoService {
  constructor(private _http: HttpClient) {}
  
    getListadoDispositivos(): Promise<any> {
      return firstValueFrom(this._http.get('https://us-central1-xxx.cloudfunctions.net/get_devices'));
    }

    getMediciones(id: any): Promise<any> {
      return firstValueFrom(
        this._http.get('https://us-central1-xxx.cloudfunctions.net/get_device_data?dev_id=' + id)
      );
    }

    getLastdata(id: any): Promise<any> {
      return firstValueFrom(
        this._http.get('https://us-central1-xxx.cloudfunctions.net/get_device_last_data?dev_id=' + id)
      );
    }

}
