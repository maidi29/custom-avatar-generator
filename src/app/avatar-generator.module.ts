import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AvatarGeneratorComponent } from './avatar-generator.component';
import { AvatarComponent } from './avatar/avatar.component';
import {createCustomElement} from "@angular/elements";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  declarations: [AvatarGeneratorComponent, AvatarComponent],
  exports: [AvatarGeneratorComponent, AvatarComponent],
  entryComponents: [AvatarGeneratorComponent],
})
export class AvatarGeneratorModule implements DoBootstrap{
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const customElement = createCustomElement(
      AvatarGeneratorComponent, {injector: this.injector}
    );
    customElements.define('custom-avatar-generator', customElement);
  }
}
