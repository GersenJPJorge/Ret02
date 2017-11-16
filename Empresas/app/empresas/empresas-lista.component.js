"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dialogconfirm_service_1 = require("./../dialogconfirm.service");
var core_1 = require("@angular/core");
var empresa_service_1 = require("./empresa.service");
var EmpresasListaComponent = /** @class */ (function () {
    function EmpresasListaComponent(empresaService, dialogconfirmService) {
        this.empresaService = empresaService;
        this.dialogconfirmService = dialogconfirmService;
    }
    EmpresasListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empresaService.getEmpresas()
            .then(function (empresas) {
            _this.empresas = empresas;
        }).catch(function (err) { return console.log(err); });
    };
    EmpresasListaComponent.prototype.onDelete = function (empresa) {
        var _this = this;
        this.dialogconfirmService.confirm('Deseja excluir o empresa ' + empresa.nome + ' ?')
            .then(function (podeDeletar) {
            if (podeDeletar) {
                _this.empresaService
                    .delete(empresa)
                    .then(function () {
                    _this.empresas = _this.empresas.filter(function (c) { return c.id != empresa.id; });
                }).catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    EmpresasListaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'empresas-lista',
            templateUrl: 'empresas-lista.component.html'
        }),
        __metadata("design:paramtypes", [empresa_service_1.EmpresaService,
            dialogconfirm_service_1.DialogConfirmService])
    ], EmpresasListaComponent);
    return EmpresasListaComponent;
}());
exports.EmpresasListaComponent = EmpresasListaComponent;
//# sourceMappingURL=empresas-lista.component.js.map