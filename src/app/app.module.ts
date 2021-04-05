import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import {FormsModule} from "@angular/forms";
import {createCustomElement} from "@angular/elements";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  declarations: [AppComponent, AvatarComponent],
  exports: [AppComponent, AvatarComponent],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const customElement = createCustomElement(
      AppComponent, {injector: this.injector}
    );
    customElements.define('custom-avatar-generator', customElement);
  }
}
