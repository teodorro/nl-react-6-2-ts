export interface INote {
  id: number;
  [key: number]: string;
}

export class Note implements INote {
  public id: number;
  [key: number]: string;

  constructor(id: number, message: string) {
    this.id = id;
    this[0] = message;
  }
}
