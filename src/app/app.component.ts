import { ContaService } from './modules/services/conta.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.setUsuarioAtual();
  }
  private contaService = inject(ContaService);

  setUsuarioAtual() {
    const usuariotring = sessionStorage.getItem('usuario');
    if (!usuariotring) return;
    const usuario = JSON.parse(usuariotring);
    this.contaService.usuarioAtual.set(usuario);
  }
}
