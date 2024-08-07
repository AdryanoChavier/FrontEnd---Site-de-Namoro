import { Component, input } from '@angular/core';
import { Membro } from '../../interface/membro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-membro-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './membro-card.component.html',
  styleUrl: './membro-card.component.css'
})
export class MembroCardComponent {
 membro = input.required<Membro>();
}
