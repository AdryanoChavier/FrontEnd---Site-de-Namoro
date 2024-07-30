import { Usuario } from './../../interface/usuario';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ContaService } from '../../services/conta.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  private toastr = inject(ToastrService);
  private router = inject(Router);
  private contaService = inject(ContaService);
  @Output() cancelarCadastro = new EventEmitter();
  model: any = {}

  cadastro(){
    this.contaService.cadastro(this.model).subscribe({
      next: _ => {
          this.router.navigateByUrl('/membros')
        this.cancelar();
      },
    error: error => this.toastr.error(error.error)
    })
  }

  cancelar(){
    this.cancelarCadastro.emit(false)
  }
}
