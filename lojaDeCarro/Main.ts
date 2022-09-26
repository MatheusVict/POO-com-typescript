import { Carro } from "./Carro";
import { Client } from "./Client";
import { Comprar } from "./Compra";
import { Funcionario } from "./Funcionario";

const carro = new Carro('camaro', 2013, 10000);
const cliente = new Client('Matheus', 4999);
const funcionario = new Funcionario('carlos');

const compra = new Comprar(cliente, carro, funcionario);

compra.detalhes()