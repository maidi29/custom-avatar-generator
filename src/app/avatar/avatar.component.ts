import {Component, Input, OnChanges, Output, SimpleChanges, EventEmitter} from '@angular/core';
import {ClothingGraphicTypes, ClothingTypes, Colors, HairTypes} from "../model";
import {lightenDarkenColor} from "../helper";


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.svg',
})
export class AvatarComponent implements OnChanges {
  @Input() public hairType: HairTypes;
  @Input() public clothing: ClothingTypes;
  @Input() public clothingGraphic: ClothingGraphicTypes;
  @Input() public colors: Colors = {
    hair: '',
    skin: '',
    clothes: '',
    graphic: '',
    accessory: '',
    background: ''
  };
  @Input() public enableBackground: boolean = false;
  @Input() public shape: 'round' | 'square' = 'round';

  @Output() private avatarChanged = new EventEmitter<boolean>();

  public HairTypes = HairTypes;
  public ClothingTypes = ClothingTypes;
  public ClothingGraphicTypes = ClothingGraphicTypes;

  public lightenDarkenColor = lightenDarkenColor;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.avatarChanged.emit(true);
  }

}

