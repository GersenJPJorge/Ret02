import { ActivatedRoute, Params} from '@angular/router';
import { Empresa } from './empresa.model';
import { EmpresaService } from './empresa.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';




@Component({
    moduleId: module.id,
    selector : 'empresa-detalhe',
    templateUrl : 'empresa-detalhe.component.html'   
})
export class EmpresaDetalheComponent implements OnInit  {

      empresa : Empresa;
      private isNovo : boolean= true;

      constructor(
         private empresaService : EmpresaService,
         private route : ActivatedRoute,
         private location : Location
      ) {}

       ngOnInit(): void {
           this.empresa = new Empresa(0, 0, '', 0, '', '');

           this.route.params.forEach((params: Params)=>{
               let id: number = +params['id'];

          if(id){

           this.isNovo = false;

           this.empresaService.getEmpresa(id)
               .then((empresa: Empresa)=> {
                    console.log(empresa);
                    this.empresa = empresa;
               });
          }
        });
    }

    getFormGroupClass(isValid : boolean, isPristine: boolean) : {} {
        return {
            'form-group' : true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid : boolean, isPristine: boolean) : {} {
        return {
            'form-control' : true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    onSubmit() : void {
        let promise;
        if (this.isNovo) {
            console.log('cadastrar');
            promise = this.empresaService.create(this.empresa);
        } else {
            console.log('alterar');
            promise = this.empresaService.update(this.empresa);
        }
        promise.then(empresa=> this.location.back());
    }
}