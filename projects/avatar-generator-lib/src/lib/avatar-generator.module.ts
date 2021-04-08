import { NgModule } from '@angular/core';
import { AvatarGeneratorComponent } from './avatar-generator.component';
import {AvatarComponent} from "./avatar/avatar.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AvatarGeneratorComponent, AvatarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ],
  exports: [AvatarGeneratorComponent]
})
export class AvatarGeneratorModule { }
