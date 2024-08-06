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
 private membroService = inject(MembroService);
 membros: Membro[] =[]
  ngOnInit(): void {
    this.loadMembros();
 }

 loadMembros(){
  this.membroService.getMembros().subscribe({
    next: membros => this.membros = membros
  })
 }
}
