import { environment } from './../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Membro } from '../interface/membro';
import { ContaService } from './conta.service';



@Injectable({
  providedIn: 'root'
})
export class MembroService {
  private http = inject(HttpClient);
  private contaservice = inject(ContaService)
  baseUrl = environment.apiUrl;

  getMembros(){
    return this.http.get<Membro[]>(this.baseUrl + 'usuario',this.getHttpsOptions());
  }
  getMembro(usuario_nome: string){
    return this.http.get<Membro>(this.baseUrl + 'usuario/' + usuario_nome,this.getHttpsOptions());
  }
  getHttpsOptions(){
    return{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.contaservice.usuarioAtual()?.token}`
      })
    }

  }

}
