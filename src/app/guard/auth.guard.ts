import { ToastrService } from 'ngx-toastr';
import { CanActivateFn } from '@angular/router';
import { ContaService } from '../modules/services/conta.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const contaService = inject(ContaService);
  const toastr = inject(ToastrService);

  if(contaService.usuarioAtual()){
    return true;
  }else{
    toastr.error('Você não tem acesso');
    return false;
  }
};
