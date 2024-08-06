import { Component, input } from '@angular/core';
import { Membro } from '../../interface/membro';

@Component({
  selector: 'app-membro-card',
  standalone: true,
  imports: [],
  templateUrl: './membro-card.component.html',
  styleUrl: './membro-card.component.css'
})
export class MembroCardComponent {
 membro = input.required<Membro>();
}
