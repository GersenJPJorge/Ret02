import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { EmpresasListaComponent} from './empresas-lista.component'
import { EmpresaDetalheComponent} from './empresa-detalhe.component'


const empresaRoutes: Routes =[
  {
      path : 'empresa',
      component: EmpresasListaComponent
  },
  {
      path : 'empresa/salvar',
      component: EmpresaDetalheComponent
  },
  {
      path : 'empresa/salvar/:id',
      component: EmpresaDetalheComponent
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(empresaRoutes)
    ],
    exports : [RouterModule]
})
export class EmpresaRoutingModule {}