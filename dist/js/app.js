"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const negociacao_1 = require("./models/negociacao");
const negociacao = new negociacao_1.Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);
