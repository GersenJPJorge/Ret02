export class Empresa {
    constructor(
        public id:          number,
        public codigo:      number,
        public nome :       string,
        public cnpj :       number,
        public dtalteracao: string,
        public dtinclusao:  string
    ){}
}