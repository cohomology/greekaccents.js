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
  public akut: boolean = false;
  public gravis: boolean = false;
  public spiritusAsper: boolean = false;
  public spiritusLenis: boolean = false;
  public circumflex: boolean = false;
  public iotaSubscriptum: boolean = false;
  public dialytika: boolean = false;
  public breve: boolean = false;
  public makron: boolean = false;
  public tonos: boolean = false;
  public endOfWord: boolean = false;

  constructor(accents?: IGreekAccents) {
    if (accents) {
      this.akut = accents.akut || false;
      this.gravis = accents.gravis || false;
      this.spiritusAsper = accents.spiritusAsper || false;
      this.spiritusLenis = accents.spiritusLenis || false;
      this.circumflex = accents.circumflex || false;
      this.iotaSubscriptum = accents.iotaSubscriptum || false;
      this.dialytika = accents.dialytika || false;
      this.breve = accents.breve || false;
      this.makron = accents.makron || false;
      this.tonos = accents.tonos || false;
      this.endOfWord = accents.endOfWord || false;
    }
  }
}