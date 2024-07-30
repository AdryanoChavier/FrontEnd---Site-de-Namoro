import { Usuario } from './../../interface/usuario';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  private contaService = inject(ContaService);
  @Output() cancelarCadastro = new EventEmitter();
  model: any = {}

  cadastro(){
    this.contaService.cadastro(this.model).subscribe({
      next: response =>{
        console.log(response);
        this.cancelar();
      },
    error: error => console.log(error)
    })
  }

  cancelar(){
    this.cancelarCadastro.emit(false)
  }
}
