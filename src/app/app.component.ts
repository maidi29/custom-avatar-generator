import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Texts} from "../../projects/avatar-generator-lib/src/lib/model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  @Input() public shape: 'round' | 'square' = 'round';
  @Input() private enableBackground: string;
  @Input() private enableFace: string;
  @Input() private displayDownload: string;
  @Input() private texts: string = JSON.stringify({
    everything: 'EVERYTHING',
    allColors: 'All colors',
    background: 'Background',
    skin: 'Skin',
    hair: 'Hair',
    hairStyle: 'Hair Style',
    accessory: 'Accessory',
    clothes: 'Clothes',
    clothing: 'Clothing',
    print: 'Print',
  });
  @Output() private svgUrl = new EventEmitter<string>();

  public _texts: Texts = JSON.parse(this.texts);
  public _enableBackground: boolean = false;
  public _enableFace: boolean = false;
  public _displayDownload: boolean = false;

  ngOnInit(): void {
    this._texts = JSON.parse(this.texts);
    this._displayDownload = this.displayDownload === 'true';
    this._enableBackground = this.enableBackground === 'true';
    this._enableFace = this.enableFace === 'true';
  }

  public emitSVG(event: string): void {
    this.svgUrl.emit(event);
  }

}


