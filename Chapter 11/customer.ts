export class Customer {
  constructor(public name: string) {}

  public updateName(name: string): void {
    this.name = name;
  }
}
