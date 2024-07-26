import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  http = inject(HttpClient)
  title = 'client';
  usuarios: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/usuario').subscribe({
      next: response => this.usuarios = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed")
    })
  }




}
