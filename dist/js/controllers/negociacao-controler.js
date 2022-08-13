"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegociacaoController = void 0;
class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }
}
exports.NegociacaoController = NegociacaoController;
