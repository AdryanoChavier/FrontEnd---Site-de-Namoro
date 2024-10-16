import { ContaService } from './modules/services/conta.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./modules/components/nav/nav.component";
import{NgxSpinnerComponent} from 'ngx-spinner'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,NgxSpinnerComponent],
  template: '<ngx-spinner> <h3>Loading...</h3></ngx-spinner><app-nav></app-nav> <div class="container" style="margin-top:100px"><router-outlet /></div>',
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
