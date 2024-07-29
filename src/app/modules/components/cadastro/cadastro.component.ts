import { Usuario } from './../../interface/usuario';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  @Input() UsuarioHomeComponent: any;
  @Output() cancelarCadastro = new EventEmitter();
  model: any = {}

  cadastro(){
    console.log(this.model);
  }

  cancelar(){
    this.cancelarCadastro.emit(false)
  }
}
