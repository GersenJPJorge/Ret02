
import { DialogConfirmService } from './../dialogconfirm.service';

import {Component, OnInit} from '@angular/core';

import { Empresa } from './empresa.model';
import { EmpresaService} from './empresa.service';

@Component({
    moduleId: module.id,
    selector : 'empresas-lista',
    templateUrl: 'empresas-lista.component.html'
})
export class EmpresasListaComponent implements OnInit {
    
    empresas : Empresa[] ;

    constructor(
        private empresaService : EmpresaService,
        private dialogconfirmService :  DialogConfirmService
        ){}

    ngOnInit() : void {
        this.empresaService.getEmpresas()
        .then((empresas : Empresa[]) => {
            this.empresas = empresas;
        }).catch(err => console.log(err));
    }
    onDelete(empresa : Empresa) : void {
       this.dialogconfirmService.confirm('Deseja excluir o empresa ' + empresa.nome + ' ?')
       .then((podeDeletar : boolean) => {
           if(podeDeletar) {
               this.empresaService
               .delete(empresa)
               .then(()=> {
                    this.empresas = this.empresas.filter((c:Empresa) => c.id != empresa.id);
               }).catch(err => {
                  console.log(err);
               });
           }
       });
    }
}