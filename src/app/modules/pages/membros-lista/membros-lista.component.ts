import { Component, OnInit, inject } from '@angular/core';
import { MembroService } from '../../services/membro.service';
import { Membro } from '../../interface/membro';
import { MembroCardComponent } from '../../components/membro-card/membro-card.component';

@Component({
  selector: 'app-membros-lista',
  standalone: true,
  imports: [MembroCardComponent],
  templateUrl: './membros-lista.component.html',
  styleUrl: './membros-lista.component.css'
})
export class MembrosListaComponent implements OnInit {
  membroService = inject(MembroService);

  ngOnInit(): void {
    if (this.membroService.membros().length === 0) this.loadMembros();
 }

 loadMembros(){
  this.membroService.getMembros()
 }
}
