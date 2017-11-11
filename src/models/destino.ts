

export class Destino {
  id: number;
  icone: string;
  nome: string;
  data_inicio: Date;
  data_final: Date;

  constructor(
  id: number,
  icone: string,
  nome: string,
  data_inicio: Date,
  data_final: Date)
  {
    this.id = id;
    this.icone = icone;
    this.nome = nome;
    this.data_inicio = data_inicio;
    this.data_final = data_final;
  }
}
