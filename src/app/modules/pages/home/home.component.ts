import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CadastroComponent } from '../../components/cadastro/cadastro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
usuarios: any;
registroMode = false;


  ngOnInit(): void {

  }
registroToogle(){
  this.registroMode = !this.registroMode
}

}
