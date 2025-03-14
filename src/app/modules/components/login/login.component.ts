import { Component, inject } from '@angular/core';
import { ContaService } from '../../services/conta.service';
import { Router } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router);
  contaService = inject(ContaService);
  private toastr = inject(ToastrService)
  model: any = {};

  login() {
    this.contaService.login(this.model).subscribe({
      next: _ => {
        this.router.navigateByUrl('/membros')
      },
      error: error => this.toastr.error(error.error)
    });
  }

  desconectar(){
    this.contaService.desconectar();
    this.router.navigateByUrl('/')
  }
}
