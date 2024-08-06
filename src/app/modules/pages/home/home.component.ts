import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CadastroComponent } from '../../components/cadastro/cadastro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  usuarios: any;
  cadastroMode = false;

  registroToogle() {
    this.cadastroMode = !this.cadastroMode;
  }

  cancelarCadastroMode(event: boolean) {
    this.cadastroMode = event;
  }
}
