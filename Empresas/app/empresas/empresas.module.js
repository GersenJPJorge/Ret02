"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var empresas_lista_component_1 = require("./empresas-lista.component");
var empresa_detalhe_component_1 = require("./empresa-detalhe.component");
var empresa_routing_module_1 = require("./empresa-routing.module");
var empresa_service_1 = require("./empresa.service");
var forms_1 = require("@angular/forms");
var EmpresasModule = /** @class */ (function () {
    function EmpresasModule() {
    }
    EmpresasModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                empresa_routing_module_1.EmpresaRoutingModule,
                forms_1.FormsModule
            ],
            declarations: [
                empresas_lista_component_1.EmpresasListaComponent,
                empresa_detalhe_component_1.EmpresaDetalheComponent
            ],
            exports: [empresas_lista_component_1.EmpresasListaComponent],
            providers: [
                empresa_service_1.EmpresaService
            ]
        })
    ], EmpresasModule);
    return EmpresasModule;
}());
exports.EmpresasModule = EmpresasModule;
//# sourceMappingURL=empresas.module.js.map