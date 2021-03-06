import { Observable } from 'rxjs';
import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[] = []
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {

  }

  get transferencias() {
    return this.listaTransferencia
  }

  todas() : Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url)
  }


  adicionar(transferencia: Transferencia) : Observable<Transferencia> {
    this.lapidarDados(transferencia)

    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private lapidarDados(transferencia: any) {
    transferencia.data = new Date();
  }

}
