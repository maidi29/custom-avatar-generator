import {Component, Input, OnChanges, Output, SimpleChanges, EventEmitter} from '@angular/core';
import {
  ClothingGraphicTypes,
  ClothingTypes,
  Colors,
  EyebrowTypes,
  EyeTypes,
  HairTypes,
  MouthTypes,
  NoseTypes
} from "../model";
import {lightenDarkenColor} from "../helper";


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.svg',
})
export class AvatarComponent implements OnChanges {
  @Input() public hairType: HairTypes;
  @Input() public eyebrowType: EyebrowTypes;
  @Input() public eyeType: EyeTypes;
  @Input() public noseType: NoseTypes;
  @Input() public mouthType: MouthTypes;
  @Input() public clothing: ClothingTypes;
  @Input() public clothingGraphic: ClothingGraphicTypes;
  @Input() public colors: Colors = {
    hair: '',
    skin: '',
    clothes: '',
    graphic: '',
    accessory: '',
    background: '',
    eyebrows: '',
    eyes: '',
    mouth: '',
  };
  @Input() public enableBackground: boolean = false;
  @Input() public enableFace: boolean = false;
  @Input() public shape: 'round' | 'square' = 'round';

  @Output() private avatarChanged = new EventEmitter<boolean>();

  public HairTypes = HairTypes;
  public EyebrowTypes = EyebrowTypes;
  public EyeTypes = EyeTypes;
  public NoseTypes = NoseTypes;
  public MouthTypes = MouthTypes;
  public ClothingTypes = ClothingTypes;
  public ClothingGraphicTypes = ClothingGraphicTypes;

  public lightenDarkenColor = lightenDarkenColor;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.avatarChanged.emit(true);
  }

}

