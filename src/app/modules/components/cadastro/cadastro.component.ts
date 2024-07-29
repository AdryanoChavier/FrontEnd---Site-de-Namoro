import { Usuario } from './../../interface/usuario';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  @Input() UsuarioHomeComponent: any;
  model: any = {}

  cadastro(){
    console.log(this.model);
  }

  cancelar(){
    console.log('cancelar')
  }
}
