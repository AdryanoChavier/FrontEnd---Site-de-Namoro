import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ContaService } from '../modules/services/conta.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const contaService = inject(ContaService);
  if(contaService.usuarioAtual()){
    req = req.clone({
      setHeaders:{
        Authorization: `Bearer ${contaService.usuarioAtual()?.token}`
      }
    })
  }

  return next(req);
};
