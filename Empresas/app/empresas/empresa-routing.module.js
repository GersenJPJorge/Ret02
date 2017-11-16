"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var empresas_lista_component_1 = require("./empresas-lista.component");
var empresa_detalhe_component_1 = require("./empresa-detalhe.component");
var empresaRoutes = [
    {
        path: 'empresa',
        component: empresas_lista_component_1.EmpresasListaComponent
    },
    {
        path: 'empresa/salvar',
        component: empresa_detalhe_component_1.EmpresaDetalheComponent
    },
    {
        path: 'empresa/salvar/:id',
        component: empresa_detalhe_component_1.EmpresaDetalheComponent
    }
];
var EmpresaRoutingModule = /** @class */ (function () {
    function EmpresaRoutingModule() {
    }
    EmpresaRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(empresaRoutes)
            ],
            exports: [router_1.RouterModule]
        })
    ], EmpresaRoutingModule);
    return EmpresaRoutingModule;
}());
exports.EmpresaRoutingModule = EmpresaRoutingModule;
//# sourceMappingURL=empresa-routing.module.js.map