
export class Roteiro {
  id: number;
  icone: string;
  local: string;
  hora: string;
  data: string = new Date().toISOString();

  constructor(
  id: number,
  icone: string,
  local: string,
  hora: string = new Date().toISOString(),
  data: string = new Date().toISOString())
  {
    this.id = id;
    this.icone = icone;
    this.local = local;
    this.hora  = hora;
    this.data = data;
  }
}
