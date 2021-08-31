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

export enum EyebrowTypes {
  NONE = 'NONE',
  ANGRY_NATURAL = 'ANGRY_NATURAL',
  DEFAULT_NATURAL = 'DEFAULT_NATURAL',
  FLAT_NATURAL = 'FLAT_NATURAL',
  FROWN_NATURAL = 'FROWN_NATURAL',
  RAISED_EXCITED_NATURAL = 'RAISED_EXCITED_NATURAL',
  SAD_CONCERNED_NATURAL = 'SAD_CONCERNED_NATURAL',
  UNIBROW_NATURAL = 'UNIBROW_NATURAL',
  UP_DOWN_NATURAL = 'UP_DOWN_NATURAL',
  RAISED_EXCITED = 'RAISED_EXCITED',
  ANGRY = 'ANGRY',
  DEFAULT = 'DEFAULT',
  SAD_CONCERNED = 'SAD_CONCERNED',
  UP_DOWN = 'UP_DOWN'
}

export enum EyeTypes {
  NONE = 'NONE',
  SQUINT = 'SQUINT',
  CLOSED = 'CLOSED',
  DEFAULT = 'DEFAULT',
  EYE_ROLL = 'EYE_ROLL',
  HAPPY = 'HAPPY',
  HEARTS = 'HEARTS',
  SIDE = 'SIDE',
  SURPRISED = 'SURPRISED',
  WINK = 'WINK',
  WINK_WACKY = 'WINK_WACKY',
  X_DIZZY = 'X_DIZZY'
}

export enum NoseTypes {
  NONE = 'NONE',
  DEFAULT = 'DEFAULT'
}

export enum MouthTypes {
  NONE = 'NONE',
  CONCERNED = 'CONCERNED',
  DEFAULT = 'DEFAULT',
  DISBELIEF = 'DISBELIEF',
  GRIMACE = 'GRIMACE',
  SAD = 'SAD',
  SCREAM_OPEN = 'SCREAM_OPEN',
  SERIOUS = 'SERIOUS',
  SMILE = 'SMILE',
  TONGUE = 'TONGUE',
  TWINKLE = 'TWINKLE'
}

export enum FacialHairTypes {
  NONE = 'NONE',
  BEARD_LIGHT = 'BEARD_LIGHT',
  BEARD_MAJESTIC = 'BEARD_MAJESTIC',
  BEARD_MEDIUM = 'BEARD_MEDIUM',
  MOUSTACHE_FANCY = 'MOUSTACHE_FANCY',
  MOUSTACHE_MAGNUM = 'MOUSTACHE_MAGNUM',
}

export enum GlassesTypes {
  NONE = 'NONE',
  GLASSES = 'GLASSES',
  GLASSES_ROUND = 'GLASSES_ROUND'
}

export interface Colors {
  hair?: string;
  skin?: string;
  clothes?: string;
  graphic?: string;
  accessory?: string;
  background?: string;
  eyebrows?: string;
  eyes?: string;
  mouth?: string;
  facialHair?: string;
  glasses?: string;
}

export interface Texts {
  everything: string;
  face: string;
  allColors: string;
  background: string;
  skin: string;
  hair: string;
  hairStyle: string;
  eyebrows: string;
  eyes: string;
  nose: string;
  mouth: string;
  facialHair: string;
  accessory: string;
  clothes: string;
  clothing: string;
  print: string;
  glasses: string;
}
