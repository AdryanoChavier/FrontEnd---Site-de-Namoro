import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { ListaComponent } from './modules/pages/lista/lista.component';
import { MembrosListaComponent } from './modules/pages/membros-lista/membros-lista.component';
import { MembrosDetalhesComponent } from './modules/pages/membros-detalhes/membros-detalhes.component';
import { MensagensComponent } from './modules/pages/mensagens/mensagens.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {path: '',component: HomeComponent},
  {
    path:'',runGuardsAndResolvers:'always',
    canActivate:[authGuard],
    children:[
      {path: 'membros',component: MembrosListaComponent },
      {path: 'membros/:id',component: MembrosDetalhesComponent},
      {path: 'lista',component: ListaComponent},
      {path: 'mensagens',component: MensagensComponent},

    ]
  },
  {path: '**',component: HomeComponent, pathMatch:'full'}
];
