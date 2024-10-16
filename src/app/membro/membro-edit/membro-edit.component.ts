import { ToastrService } from 'ngx-toastr';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, HostListener, OnInit, ViewChild, inject } from '@angular/core';
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
  @ViewChild('editForm') editForm?: NgForm
  @HostListener('window:beforeunload',['$event']) notify($event:any){
    if(this.editForm?.dirty){
      $event.returnValue = true
    }
  }
  membro?: Membro;
  private contaService = inject(ContaService);
  private membroService = inject(MembroService);
  private toastrService = inject(ToastrService)

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
  updateMembro(){
    this.membroService.updateMembro(this.editForm?.value).subscribe({
      next: _ =>{
        this.toastrService.success("Perfil atualizado com sucesso")
        this.editForm?.reset(this.membro)
      }
    })

  }
}

