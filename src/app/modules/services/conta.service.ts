import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:5000/api/';

  login(model:any){
    return this.http.post(this.baseUrl + 'conta/login', model);

  }

}
