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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var EmpresaService = /** @class */ (function () {
    function EmpresaService(http) {
        this.http = http;
        // app é a pasta de onde fizermos a chamada
        // empresas é o nome da variável na classe InMemoryDataService
        this.empresasUrl = 'app/empresas';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EmpresaService.prototype.getEmpresas = function () {
        return this.http.get(this.empresasUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.trataErro);
    };
    EmpresaService.prototype.trataErro = function (err) {
        console.log('Erro : ', err);
        return Promise.reject(err.message || err);
    };
    EmpresaService.prototype.getEmpresa = function (id) {
        return this.getEmpresas()
            .then(function (empresas) { return empresas.find(function (empresa) { return empresa.id === id; }); });
    };
    EmpresaService.prototype.create = function (empresa) {
        return this.http.post(this.empresasUrl, JSON.stringify(empresa), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log(response.json().data);
            return response.json().data;
        })
            .catch(this.trataErro);
    };
    EmpresaService.prototype.update = function (empresa) {
        var url = this.empresasUrl + "/" + empresa.id; //app/empresa/:id
        return this.http
            .put(url, JSON.stringify(empresa), { headers: this.headers })
            .toPromise()
            .then(function () { return empresa; })
            .catch(this.trataErro);
    };
    EmpresaService.prototype.delete = function (empresa) {
        var url = this.empresasUrl + "/" + empresa.id; //app/empresa/:id
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return empresa; })
            .catch(this.trataErro);
    };
    EmpresaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmpresaService);
    return EmpresaService;
}());
exports.EmpresaService = EmpresaService;
//# sourceMappingURL=empresa.service.js.map