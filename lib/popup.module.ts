
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {PopupComponent} from './components/popup/popup.component';
import {PopupService} from './services/popup.service';
import {PopupsManagerComponent} from './components/manager/popups.manager.component';
import {ComponentInjectorService} from 'ng2-component-injector/lib/component.injector.service';


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
export class PopupModule {}
