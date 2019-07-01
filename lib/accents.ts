/* tslint:disable:no-bitwise */

export enum EGreekAccent {
  Akut = 2,
  Gravis = 4,
  SpiritusAsper = 8,
  SpiritusLenis = 16,
  Circumflex = 32,
  IotaSubscriptum = 64,
  Dialytika = 128,
  Breve = 256,
  Makron = 512,
  Tonos = 1024,
  EndOfWord = 2048,
}

export interface IGreekAccents {
  akut?: boolean ;
  gravis?: boolean ;
  spiritusAsper?: boolean ;
  spiritusLenis?: boolean;
  circumflex?: boolean;
  iotaSubscriptum?: boolean;
  dialytika?: boolean;
  breve?: boolean;
  makron?: boolean;
  tonos?: boolean;
  endOfWord?: boolean;
}

export class GreekAccents {
  private accents: number;

  constructor(accents?: IGreekAccents) {
    this.accents = 0;
    if (accents) {
      if (accents.akut) { this.accents += EGreekAccent.Akut; }
      if (accents.gravis) { this.accents += EGreekAccent.Gravis; }
      if (accents.spiritusAsper) { this.accents += EGreekAccent.SpiritusAsper; }
      if (accents.spiritusLenis) { this.accents += EGreekAccent.SpiritusLenis; }
      if (accents.circumflex) { this.accents += EGreekAccent.Circumflex; }
      if (accents.iotaSubscriptum) { this.accents += EGreekAccent.IotaSubscriptum; }
      if (accents.dialytika) { this.accents += EGreekAccent.Dialytika; }
      if (accents.breve) { this.accents += EGreekAccent.Breve; }
      if (accents.makron) { this.accents += EGreekAccent.Makron; }
      if (accents.tonos) { this.accents += EGreekAccent.Tonos; }
      if (accents.endOfWord) { this.accents += EGreekAccent.EndOfWord; }
   }
  }

  public akut(): boolean { return (this.accents & EGreekAccent.Akut) !== 0; }
  public gravis(): boolean { return (this.accents & EGreekAccent.Gravis) !== 0; }
  public spiritusAsper(): boolean { return (this.accents & EGreekAccent.SpiritusAsper) !== 0; }
  public spiritusLenis(): boolean { return (this.accents & EGreekAccent.SpiritusLenis) !== 0; }
  public circumflex(): boolean { return (this.accents & EGreekAccent.Circumflex) !== 0; }
  public iotaSubscriptum(): boolean { return (this.accents & EGreekAccent.IotaSubscriptum) !== 0; }
  public dialytika(): boolean { return (this.accents & EGreekAccent.Dialytika) !== 0; }
  public breve(): boolean { return (this.accents & EGreekAccent.Breve) !== 0; }
  public makron(): boolean { return (this.accents & EGreekAccent.Makron) !== 0; }
  public tonos(): boolean { return (this.accents & EGreekAccent.Tonos) !== 0; }
  /** @internal */
  public _internalRepresentation(): number { return this.accents; }
}
