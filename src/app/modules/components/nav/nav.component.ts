import { Usuario } from './../../interface/usuario';

import { ContaService } from './../../services/conta.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,RouterLink,RouterLinkActive,LoginComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private router = inject(Router);
  contaService = inject(ContaService);


  desconectar(){
    this.contaService.desconectar();
    this.router.navigateByUrl('/')
  }

}
