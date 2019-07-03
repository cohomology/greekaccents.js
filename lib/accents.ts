/* tslint:disable:no-bitwise */

export enum EGreekAccent {
  Akut            = 1,
  Gravis          = 2,
  SpiritusAsper   = 3,
  SpiritusLenis   = 4,
  Circumflex      = 5,
  IotaSubscriptum = 6,
  Dialytika       = 7,
  Breve           = 8,
  Makron          = 9,
  Tonos           = 10,
  EndOfWord       = 11,
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
      if (accents.akut) { this.accents += 1 << EGreekAccent.Akut; }
      if (accents.gravis) { this.accents += 1 << EGreekAccent.Gravis; }
      if (accents.spiritusAsper) { this.accents += 1 << EGreekAccent.SpiritusAsper; }
      if (accents.spiritusLenis) { this.accents += 1 << EGreekAccent.SpiritusLenis; }
      if (accents.circumflex) { this.accents += 1 << EGreekAccent.Circumflex; }
      if (accents.iotaSubscriptum) { this.accents += 1 << EGreekAccent.IotaSubscriptum; }
      if (accents.dialytika) { this.accents += 1 << EGreekAccent.Dialytika; }
      if (accents.breve) { this.accents += 1 << EGreekAccent.Breve; }
      if (accents.makron) { this.accents += 1 << EGreekAccent.Makron; }
      if (accents.tonos) { this.accents += 1 << EGreekAccent.Tonos; }
      if (accents.endOfWord) { this.accents += 1 << EGreekAccent.EndOfWord; }
   }
  }

  public akut(): boolean { return (this.accents & (1 << EGreekAccent.Akut)) !== 0; }
  public gravis(): boolean { return (this.accents & (1 << EGreekAccent.Gravis)) !== 0; }
  public spiritusAsper(): boolean { return (this.accents & (1 << EGreekAccent.SpiritusAsper)) !== 0; }
  public spiritusLenis(): boolean { return (this.accents & (1 << EGreekAccent.SpiritusLenis)) !== 0; }
  public circumflex(): boolean { return (this.accents & (1 << EGreekAccent.Circumflex)) !== 0; }
  public iotaSubscriptum(): boolean { return (this.accents & (1 << EGreekAccent.IotaSubscriptum)) !== 0; }
  public dialytika(): boolean { return (this.accents & (1 << EGreekAccent.Dialytika)) !== 0; }
  public breve(): boolean { return (this.accents & (1 << EGreekAccent.Breve)) !== 0; }
  public makron(): boolean { return (this.accents & (1 << EGreekAccent.Makron)) !== 0; }
  public tonos(): boolean { return (this.accents & (1 << EGreekAccent.Tonos)) !== 0; }
  public endOfWord(): boolean { return (this.accents & (1 << EGreekAccent.EndOfWord)) !== 0; }

  public setAkut(value: boolean) { this._updateBit(EGreekAccent.Akut, value); }
  public setGravis(value: boolean) { this._updateBit(EGreekAccent.Gravis, value); }
  public setSpiritusAsper(value: boolean) { this._updateBit(EGreekAccent.SpiritusAsper, value); }
  public setSpiritusLenis(value: boolean) { this._updateBit(EGreekAccent.SpiritusLenis, value); }
  public setCircumflex(value: boolean) { this._updateBit(EGreekAccent.Circumflex, value); }
  public setIotaSubscriptum(value: boolean) { this._updateBit(EGreekAccent.IotaSubscriptum, value); }
  public setDialytika(value: boolean) { this._updateBit(EGreekAccent.Dialytika, value); }
  public setBreve(value: boolean) { this._updateBit(EGreekAccent.Breve, value); }
  public setMakron(value: boolean) { this._updateBit(EGreekAccent.Makron, value); }
  public setTonos(value: boolean) { this._updateBit(EGreekAccent.Tonos, value); }
  public setEndOfWord(value: boolean) { this._updateBit(EGreekAccent.EndOfWord, value); }

  /** @internal */
  public _internalRepresentation(): number { return this.accents; }
  /** @internal */
  public _updateBit(bitPosition: number, bitValue: boolean) {
    const bitValueNormalized = bitValue ? 1 : 0;
    const clearMask = ~(1 << bitPosition);
    this.accents = (this.accents & clearMask) | (bitValueNormalized << bitPosition);
  }
}
