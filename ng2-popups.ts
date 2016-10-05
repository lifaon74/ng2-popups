import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentInjectorService } from 'ng2-component-injector';

import { PopupComponent } from './src/components/popup/popup.component';
import { PopupService } from './src/services/popup.service';
import { PopupsManagerComponent } from './src/components/manager/popups.manager.component';


export * from './src/components/manager/popups.manager.component';
export * from './src/components/popup/popup.component';
export * from './src/services/popup.service';


@NgModule({
  imports: [CommonModule],
  declarations: [
    PopupComponent, PopupsManagerComponent
  ],
  providers: [
    PopupService, ComponentInjectorService
  ],
  exports: [
    PopupComponent, PopupsManagerComponent
  ]
})
export class PopupModule {
}