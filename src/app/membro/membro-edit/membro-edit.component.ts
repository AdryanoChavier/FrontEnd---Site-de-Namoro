import { FormsModule } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';
import { Membro } from '../../modules/interface/membro';
import { ContaService } from '../../modules/services/conta.service';
import { MembroService } from '../../modules/services/membro.service';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-membro-edit',
  standalone: true,
  imports: [TabsModule,FormsModule],
  templateUrl: './membro-edit.component.html',
  styleUrl: './membro-edit.component.css'
})
export class MembroEditComponent implements OnInit{
  membro?: Membro;
  private contaService = inject(ContaService);
  private membroService = inject(MembroService);

  ngOnInit(): void {
    this.carregarMembro()

  }
  carregarMembro(){
    const usuario = this.contaService.usuarioAtual()
    if(!usuario) return;
    this.membroService.getMembro(usuario.usuario_nome).subscribe({
      next: membro => this.membro = membro
    })
  }
}

