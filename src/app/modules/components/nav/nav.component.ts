import { ContaService } from './../../services/conta.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  contaService = inject(ContaService);
  model: any = {};

  login() {
    this.contaService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: error => console.log(error)
    });
  }

  desconectar(){
    this.contaService.desconectar()
  }
}
