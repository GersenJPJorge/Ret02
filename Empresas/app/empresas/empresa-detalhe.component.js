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
var router_1 = require("@angular/router");
var empresa_model_1 = require("./empresa.model");
var empresa_service_1 = require("./empresa.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var EmpresaDetalheComponent = /** @class */ (function () {
    function EmpresaDetalheComponent(empresaService, route, location) {
        this.empresaService = empresaService;
        this.route = route;
        this.location = location;
        this.isNovo = true;
    }
    EmpresaDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empresa = new empresa_model_1.Empresa(0, 0, '', 0, '', '');
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id) {
                _this.isNovo = false;
                _this.empresaService.getEmpresa(id)
                    .then(function (empresa) {
                    console.log(empresa);
                    _this.empresa = empresa;
                });
            }
        });
    };
    EmpresaDetalheComponent.prototype.getFormGroupClass = function (isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    EmpresaDetalheComponent.prototype.getFormControlClass = function (isValid, isPristine) {
        return {
            'form-control': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    EmpresaDetalheComponent.prototype.onSubmit = function () {
        var _this = this;
        var promise;
        if (this.isNovo) {
            console.log('cadastrar');
            promise = this.empresaService.create(this.empresa);
        }
        else {
            console.log('alterar');
            promise = this.empresaService.update(this.empresa);
        }
        promise.then(function (empresa) { return _this.location.back(); });
    };
    EmpresaDetalheComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'empresa-detalhe',
            templateUrl: 'empresa-detalhe.component.html'
        }),
        __metadata("design:paramtypes", [empresa_service_1.EmpresaService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], EmpresaDetalheComponent);
    return EmpresaDetalheComponent;
}());
exports.EmpresaDetalheComponent = EmpresaDetalheComponent;
//# sourceMappingURL=empresa-detalhe.component.js.map