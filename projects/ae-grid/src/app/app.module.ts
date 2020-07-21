import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector, ApplicationRef } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { AeGridComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AeGridComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule
  ],
  exports: [AeGridComponent]
})
export class AppModule implements DoBootstrap {

  constructor(public injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const aeGrid = createCustomElement(AeGridComponent, { injector: this.injector });
    customElements.define('ae-grid', aeGrid);
  }
}
