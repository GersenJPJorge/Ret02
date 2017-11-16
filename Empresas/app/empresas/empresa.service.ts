import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Empresa } from './empresa.model';

@Injectable()
export class EmpresaService{

   // app é a pasta de onde fizermos a chamada
   // empresas é o nome da variável na classe InMemoryDataService
   private empresasUrl : string = 'app/empresas';

   private headers: Headers = new Headers ({'Content-Type' : 'application/json'})

    constructor(
       private http: Http
    ) {}

    getEmpresas() : Promise<Empresa[]> {

       return this.http.get(this.empresasUrl) 
         .toPromise()
         .then(response => response.json().data as Empresa[])

         .catch(this.trataErro);
        }
      private trataErro(err : any) : Promise<any> {
        console.log('Erro : ' , err );
          return Promise.reject(err.message || err );
        }

    getEmpresa(id:number): Promise<Empresa> {
           return this.getEmpresas()
           .then((empresas: Empresa[]) => empresas.find(empresa => empresa.id === id)); 
          }

   create(empresa: Empresa): Promise<Empresa> {
        return this.http.post(this.empresasUrl, JSON.stringify(empresa), {headers:this.headers})
        .toPromise()
        .then((response : Response) => {
            console.log(response.json().data);
            return response.json().data as Empresa;  
        })
        .catch(this.trataErro);
    }
    update(empresa: Empresa): Promise<Empresa> {
      const url = `${this.empresasUrl}/${empresa.id}`; //app/empresa/:id
      return this.http
      .put(url, JSON.stringify(empresa), {headers:this.headers})
      .toPromise()
      .then(() => empresa as Empresa)  
      .catch(this.trataErro);
  }
  delete(empresa: Empresa): Promise<Empresa> {
    const url = `${this.empresasUrl}/${empresa.id}`; //app/empresa/:id
    return this.http
    .delete(url, {headers:this.headers})
    .toPromise()
    .then(() => empresa as Empresa)  
    .catch(this.trataErro);
}
}