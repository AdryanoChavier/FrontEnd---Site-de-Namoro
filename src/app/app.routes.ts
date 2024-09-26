import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { ListaComponent } from './modules/pages/lista/lista.component';
import { MembrosListaComponent } from './modules/pages/membros-lista/membros-lista.component';
import { MembrosDetalhesComponent } from './modules/pages/membros-detalhes/membros-detalhes.component';
import { MensagensComponent } from './modules/pages/mensagens/mensagens.component';
import { authGuard } from './guard/auth.guard';
import { MembroEditComponent } from './membro/membro-edit/membro-edit.component';
import { TestErrosComponent } from './erros/test-erros/test-erros.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

export const routes: Routes = [
  {path: '',component: HomeComponent},
  {
    path:'',runGuardsAndResolvers:'always',
    canActivate:[authGuard],
    children:[
      {path: 'membros',component: MembrosListaComponent },
      {path: 'membros/:usuario_nome',component: MembrosDetalhesComponent},
      {path: 'membro/editar',component: MembroEditComponent},
      {path: 'lista',component: ListaComponent},
      {path: 'mensagens',component: MensagensComponent},

    ]
  },
  {path: 'errors',component:TestErrosComponent},
  {path: 'not-found',component:NotFoundComponent},
  {path: 'server-error',component:ServerErrorComponent},
  {path: '**',component: HomeComponent, pathMatch:'full'}
];
