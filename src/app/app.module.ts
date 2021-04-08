import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import {AvatarGeneratorModule} from "../../projects/avatar-generator-lib/src/lib/avatar-generator.module";

@NgModule({
  imports: [AvatarGeneratorModule],
  providers: [],
  declarations: [AppComponent],
  exports: [AppComponent],
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
