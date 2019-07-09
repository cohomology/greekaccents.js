/* tslint:disable:no-bitwise */

export enum EGreekAccent {
  Akut            = 0,
  Gravis          = 1,
  SpiritusAsper   = 2,
  SpiritusLenis   = 3,
  Circumflex      = 4,
  IotaSubscriptum = 5,
  Dialytika       = 6,
  Breve           = 7,
  Makron          = 8,
  Tonos           = 9,
  EndOfWord       = 10,
}

export enum EGreekAllowedAccentCombination {
  Comb_None = 0,
  Comb_Akut = ( 1 << EGreekAccent.Akut ),
  Comb_Gravis = ( 1 << EGreekAccent.Gravis ),
  Comb_SpiritusAsper = ( 1 << EGreekAccent.SpiritusAsper ),
  Comb_AkutSpiritusAsper = ( 1 << EGreekAccent.Akut ) | ( 1 << EGreekAccent.SpiritusAsper ),
  Comb_GravisSpiritusAsper = ( 1 << EGreekAccent.Gravis) | (1 << EGreekAccent.SpiritusAsper),
  Comb_SpiritusLenis = (1 << EGreekAccent.SpiritusLenis),
  Comb_AkutSpiritusLenis = (1 << EGreekAccent.Akut) | (1 << EGreekAccent.SpiritusLenis),
  Comb_GravisSpiritusLenis = (1 << EGreekAccent.Gravis) | (1 << EGreekAccent.SpiritusLenis),
  Comb_Circumflex = (1 << EGreekAccent.Circumflex),
  Comb_CircumflexSpiritusAsper = (1 << EGreekAccent.Circumflex) | (1 << EGreekAccent.SpiritusAsper),
  Comb_CircumflexSpiritusLenis = (1 << EGreekAccent.Circumflex) | (1 << EGreekAccent.SpiritusLenis),
  Comb_IotaSubscriptum = (1 << EGreekAccent.IotaSubscriptum),
  Comb_AkutIotaSubscriptum = (1 << EGreekAccent.Akut) | (1 << EGreekAccent.IotaSubscriptum),
  Comb_GravisIotaSubscriptum = (1 << EGreekAccent.Gravis) | (1 << EGreekAccent.IotaSubscriptum),
  Comb_SpiritusAsperIotaSubscriptum = (1 << EGreekAccent.SpiritusAsper) | (1 << EGreekAccent.IotaSubscriptum),
  Comb_AkutSpiritusAsperIotaSubscriptum = ( 1 << EGreekAccent.Akut) | (1 << EGreekAccent.SpiritusAsper) |
                                          (1 << EGreekAccent.IotaSubscriptum),
  Comb_GravisSpiritusAsperIotaSubscriptum = ( 1 << EGreekAccent.Gravis) | (1 << EGreekAccent.SpiritusAsper) |
                                          (1 << EGreekAccent.IotaSubscriptum),
  Comb_SpiritusLenisIotaSubscriptum = (1 << EGreekAccent.SpiritusLenis) | (1 << EGreekAccent.IotaSubscriptum),
  Comb_AkutSpiritusLenisIotaSubscriptum = ( 1 << EGreekAccent.Akut) | (1 << EGreekAccent.SpiritusLenis) |
                                          (1 << EGreekAccent.IotaSubscriptum),
  Comb_GravisSpiritusLenisIotaSubscriptum = ( 1 << EGreekAccent.Gravis) | (1 << EGreekAccent.SpiritusLenis) |
                                          (1 << EGreekAccent.IotaSubscriptum),
  Comb_CircumflexIotaSubscriptum = (1 << EGreekAccent.Circumflex) | (1 << EGreekAccent.IotaSubscriptum),
  Comb_SpiritusAsperCircumflexIotaSubscriptum = (1 << EGreekAccent.SpiritusAsper) | (1 << EGreekAccent.Circumflex) |
                                                (1 << EGreekAccent.IotaSubscriptum),
  Comb_SpiritusLenisCircumflexIotaSubscriptum = (1 << EGreekAccent.SpiritusLenis) | (1 << EGreekAccent.Circumflex) |
                                                (1 << EGreekAccent.IotaSubscriptum),
  Comb_Dialytika = (1 << EGreekAccent.Dialytika),
  Comb_AkutDialytika = (1 << EGreekAccent.Akut) | (1 << EGreekAccent.Dialytika),
  Comb_GravisDialytika = (1 << EGreekAccent.Gravis) | (1 << EGreekAccent.Dialytika),
  Comb_CircumflexDialytika = (1 << EGreekAccent.Circumflex) | (1 << EGreekAccent.Dialytika),
  Comb_Breve = (1 << EGreekAccent.Breve),
  Comb_Makron = (1 << EGreekAccent.Makron),
  Comb_Tonos = (1 << EGreekAccent.Tonos),
  Comb_DialytikaTonos = (1 << EGreekAccent.Dialytika) | (1 << EGreekAccent.Tonos),
  Comb_EndOfWord = (1 << EGreekAccent.EndOfWord),
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
  private mAccents: number;

  constructor(accents?: IGreekAccents) {
    this.mAccents = 0;
    if (accents) {
      if (accents.akut) { this.mAccents += 1 << EGreekAccent.Akut; }
      if (accents.gravis) { this.mAccents += 1 << EGreekAccent.Gravis; }
      if (accents.spiritusAsper) { this.mAccents += 1 << EGreekAccent.SpiritusAsper; }
      if (accents.spiritusLenis) { this.mAccents += 1 << EGreekAccent.SpiritusLenis; }
      if (accents.circumflex) { this.mAccents += 1 << EGreekAccent.Circumflex; }
      if (accents.iotaSubscriptum) { this.mAccents += 1 << EGreekAccent.IotaSubscriptum; }
      if (accents.dialytika) { this.mAccents += 1 << EGreekAccent.Dialytika; }
      if (accents.breve) { this.mAccents += 1 << EGreekAccent.Breve; }
      if (accents.makron) { this.mAccents += 1 << EGreekAccent.Makron; }
      if (accents.tonos) { this.mAccents += 1 << EGreekAccent.Tonos; }
      if (accents.endOfWord) { this.mAccents += 1 << EGreekAccent.EndOfWord; }
   }
  }

  public akut(): boolean { return (this.mAccents & (1 << EGreekAccent.Akut)) !== 0; }
  public gravis(): boolean { return (this.mAccents & (1 << EGreekAccent.Gravis)) !== 0; }
  public spiritusAsper(): boolean { return (this.mAccents & (1 << EGreekAccent.SpiritusAsper)) !== 0; }
  public spiritusLenis(): boolean { return (this.mAccents & (1 << EGreekAccent.SpiritusLenis)) !== 0; }
  public circumflex(): boolean { return (this.mAccents & (1 << EGreekAccent.Circumflex)) !== 0; }
  public iotaSubscriptum(): boolean { return (this.mAccents & (1 << EGreekAccent.IotaSubscriptum)) !== 0; }
  public dialytika(): boolean { return (this.mAccents & (1 << EGreekAccent.Dialytika)) !== 0; }
  public breve(): boolean { return (this.mAccents & (1 << EGreekAccent.Breve)) !== 0; }
  public makron(): boolean { return (this.mAccents & (1 << EGreekAccent.Makron)) !== 0; }
  public tonos(): boolean { return (this.mAccents & (1 << EGreekAccent.Tonos)) !== 0; }
  public endOfWord(): boolean { return (this.mAccents & (1 << EGreekAccent.EndOfWord)) !== 0; }

  public setAkut(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.Akut, value);
  }
  public setGravis(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.Gravis, value);
  }
  public setSpiritusAsper(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.SpiritusAsper, value);
  }
  public setSpiritusLenis(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.SpiritusLenis, value);
  }
  public setCircumflex(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.Circumflex, value);
  }
  public setIotaSubscriptum(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.IotaSubscriptum, value);
  }
  public setDialytika(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.Dialytika, value);
  }
  public setBreve(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.Breve, value);
  }
  public setMakron(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.Makron, value);
  }
  public setTonos(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.Tonos, value);
  }
  public setEndOfWord(value: boolean = true): GreekAccents {
    return this._updateBit(EGreekAccent.EndOfWord, value);
  }
  public getAccents(): EGreekAccent[] {
    let accents = this.mAccents;
    const result = [];
    let current = EGreekAccent.Akut;
    while (accents !== 0) {
      if ((accents & 1) !== 0) {
        result.push(current);
      }
      current += 1;
      accents >>= 1;
    }
    return result;
  }
  public expand(): IGreekAccents {
    return {
      akut: this.akut(),
      breve: this.breve(),
      circumflex: this.circumflex(),
      dialytika: this.dialytika(),
      endOfWord: this.endOfWord(),
      gravis: this.gravis(),
      iotaSubscriptum: this.iotaSubscriptum(),
      makron: this.makron(),
      spiritusAsper: this.spiritusAsper(),
      spiritusLenis: this.spiritusLenis(),
      tonos: this.tonos(),
    };
  }
  public clone(): GreekAccents {
    return new GreekAccents(this.expand());
  }

  /** @internal */
  public _internalRepresentation(): number { return this.mAccents; }
  /** @internal */
  public _setInternalRepresentation(accents: number): GreekAccents {
    this.mAccents = accents;
    return this;
  }
  /** @internal */
  private _updateBit(bitPosition: number, bitValue: boolean): GreekAccents {
    const bitValueNormalized = bitValue ? 1 : 0;
    const clearMask = ~(1 << bitPosition);
    this.mAccents = (this.mAccents & clearMask) | (bitValueNormalized << bitPosition);
    return this;
  }
}
