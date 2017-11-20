
export class Roteiro {
  id: number;
  icone: string;
  local: string;
  hora: string;
  data: Date;

  constructor(
  id: number,
  icone: string,
  local: string,
  hora: string,
  data: Date)
  {
    this.id = id;
    this.icone = icone;
    this.local = local;
    this.hora  = hora;
    this.data = data;
  }
}
