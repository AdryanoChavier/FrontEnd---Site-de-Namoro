import { ContaService } from './../../services/conta.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private contaService = inject(ContaService);
  loggeDIn = false;
  model: any = {};

  login() {
    this.contaService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.loggeDIn = true;
      },
      error: error => console.log(error)
    });
  }
}
