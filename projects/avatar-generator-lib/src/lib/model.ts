export enum HairTypes {
  NONE = 'NONE',
  BUN = 'BUN',
  BOB = 'BOB',
  BIG = 'BIG',
  CURLY = 'CURLY',
  CURVY = 'CURVY',
  DREADS01 = 'DREADS01',
  DREADS02 = 'DREADS02',
  DREADS03 = 'DREADS03',
  FRIDA = 'FRIDA',
  FRO = 'FRO',
  FROANDBAND = 'FROANDBAND',
  LONGNOTTOOLONG = 'LONGNOTTOOLONG',
  MIAWALLACE = 'MIAWALLACE',
  SHAVEDSIDES = 'SHAVEDSIDES',
  STRAIGHTANDSTRAND = 'STRAIGHTANDSTRAND',
  STRAIGHT01 = 'STRAIGHT01',
  STRAIGHT02 = 'STRAIGHT02',
  FRIZZLE = 'FRIZZLE',
  SHAGGY = 'SHAGGY',
  SHAGGYMULLET = 'SHAGGYMULLET',
  SHORTCURLY = 'SHORTCURLY',
  SHORTFLAT = 'SHORTFLAT',
  SHORTROUND = 'SHORTROUND',
  SIDES = 'SIDES',
  SHORTWAVED = 'SHORTWAVED',
  CEASARANDSIDE = 'CEASARANDSIDE',
  CEASAR = 'CEASAR',
}

export enum ClothingTypes {
  BLAZER_SHIRT = 'BLAZER_SHIRT',
  BLAZER_SWEATER = 'BLAZER_SWEATER',
  COLLAR_SWEATER = 'COLLAR_SWEATER',
  GRAPHIC_SHIRT = 'GRAPHIC_SHIRT',
  HOODIE = 'HOODIE',
  OVERALL = 'OVERALL',
  SHIRT_CREWNECK = 'SHIRT_CREWNECK',
  SHIRT_SCOOPNECK = 'SHIRT_SCOOPNECK',
  SHIRT_VNECK = 'SHIRT_VNECK'
}

export enum ClothingGraphicTypes {
  SKRULL_OUTLINE = 'SKRULL_OUTLINE',
  SKRULL = 'SKRULL',
  PIZZA = 'PIZZA',
  DIAMOND = 'DIAMOND',
  DEER = 'DEER',
  BEAR = 'BEAR',
  BAT = 'BAT'
}

export interface Colors {
  hair?: string;
  skin?: string;
  clothes?: string;
  graphic?: string;
  accessory?: string;
  background?: string;
}

export interface Texts {
  everything: string;
  allColors: string;
  background: string;
  skin: string;
  hair: string;
  hairStyle: string;
  accessory: string;
  clothes: string;
  clothing: string;
  print: string;
}
