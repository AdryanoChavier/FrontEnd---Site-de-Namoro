import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  usuarioAtual = signal<Usuario | null>(null);

  login(model:any){
    return this.http.post<Usuario>(this.baseUrl + 'conta/login', model).pipe(
      map(usuario =>{
        if(usuario){
          sessionStorage.setItem('usuario',JSON.stringify(usuario));
          this.usuarioAtual.set(usuario);
        }
      })
    );
  }
  desconectar(){
    sessionStorage.removeItem('usuario');
    this.usuarioAtual.set(null);
  }
  cadastro(model:any){
    return this.http.post<Usuario>(this.baseUrl + 'conta/registrar', model).pipe(
      map(usuario =>{
        if(usuario){
          sessionStorage.setItem('usuario',JSON.stringify(usuario));
          this.usuarioAtual.set(usuario);
        }
        return usuario
      }),

    );
  }

}
