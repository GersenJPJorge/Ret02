"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var empresas = [
            { id: 1, codigo: 1, nome: 'empresa 1', cnpj: 11111111111, dtalteracao: '01/01/0001', dtinclusao: '01/01/0001' },
            { id: 2, codigo: 2, nome: 'empresa 1', cnpj: 22222222222, dtalteracao: '02/02/0002', dtinclusao: '02/02/0002' },
            { id: 3, codigo: 3, nome: 'empresa 1', cnpj: 33333333333, dtalteracao: '03/03/0003', dtinclusao: '03/03/0003' },
            { id: 4, codigo: 4, nome: 'empresa 1', cnpj: 44444444444, dtalteracao: '04/04/0004', dtinclusao: '04/04/0004' },
            { id: 5, codigo: 5, nome: 'empresa 1', cnpj: 55555555555, dtalteracao: '05/05/0005', dtinclusao: '05/05/0005' }
        ];
        return { empresas: empresas };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map