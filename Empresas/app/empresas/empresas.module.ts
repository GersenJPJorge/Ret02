import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasListaComponent } from './empresas-lista.component';
import { EmpresaDetalheComponent } from './empresa-detalhe.component';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaService } from './empresa.service';
import { FormsModule} from '@angular/forms';

@NgModule({ 
    imports : [ 
        CommonModule,
        EmpresaRoutingModule,
        FormsModule       
    ],
     declarations : [
         EmpresasListaComponent,
         EmpresaDetalheComponent
     ],
     exports : [ EmpresasListaComponent],
     providers: [
         EmpresaService
     ]
})
export class EmpresasModule {}