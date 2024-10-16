import { environment } from './../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Membro } from '../interface/membro';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembroService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  membros = signal<Membro[]>([]);

  getMembros(){
    return this.http.get<Membro[]>(this.baseUrl + 'usuario').subscribe({
      next: membros => this.membros.set(membros)
    });
  }

  getMembro(usuario_nome: string){
    const membro = this.membros().find(x=> x.usuario_nome == usuario_nome);
    if(membro !== undefined) return of(membro);

    return this.http.get<Membro>(this.baseUrl + 'usuario/' + usuario_nome);
  }

  updateMembro(membro: Membro){
    return this.http.put(this.baseUrl + 'usuario',membro).pipe(
      tap(() =>{
        this.membros.update(membros => membros.map(m => m.usuario_nome === membro.usuario_nome ? membro: m))
      })
    )
  }

}
