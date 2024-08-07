import { environment } from './../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Membro } from '../interface/membro';

@Injectable({
  providedIn: 'root'
})
export class MembroService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  getMembros(){
    return this.http.get<Membro[]>(this.baseUrl + 'usuario');
  }
  getMembro(usuario_nome: string){
    return this.http.get<Membro>(this.baseUrl + 'usuario/' + usuario_nome);
  }


}
