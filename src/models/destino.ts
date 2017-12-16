

export class Destino {
  id: number;
  icone: string;
  nome: string;
  data_inicio: string= new Date().toISOString();
  data_final: string= new Date().toISOString();

  constructor(
  id: number,
  icone: string,
  nome: string,
  data_inicio: string= new Date().toISOString(),
  data_final: string= new Date().toISOString())
  {
    this.id = id;
    this.icone = icone;
    this.nome = nome;
    this.data_inicio = data_inicio;
    this.data_final = data_final;
  }
}
