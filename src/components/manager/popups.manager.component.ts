import {
  Component, ElementRef
} from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { IPopupConfig, PopupService } from '../../services/popup.service';


@Component({
  selector: 'utx-popups',
  // templateUrl: 'popups.manager.component.html',
  // styleUrls: ['popups.manager.component.css']
  template: `
    <utx-popup
      *ngFor="let popupId of popupIds"
      (popupReady)="onPopupReady($event)"
      (popupClosed)="onPopupClosed($event)"
      [popupId]="popupId"
    ></utx-popup>
  `,
  styles: [`
    :host {
      z-index: 99;
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `]
})
export class PopupsManagerComponent {

  element: HTMLElement;

  popups: any = {};
  popupIds: number[] = [];
  private _resolveOpenPromise: any;

  constructor(private popupService: PopupService,
              element: ElementRef) {
    this.element = element.nativeElement;
    this.popupService.registerManager(this);
    this.checkIfDisplay();
  }

  open(config: IPopupConfig): Promise<PopupComponent> {
    let id = Math.floor(Math.random() * 10e10);
    this.setPopup(id, config);

    return new Promise((resolve: any, reject: any) => {
      this._resolveOpenPromise = resolve;
    });
  }

  onPopupReady(event: any) {
    let config = this.popups[event.popupId];
    this.setPopup(event.popupId, event.popup);

    event.popup.open(config)
      .then(() => {
        this._resolveOpenPromise(event.popup);
      });
  }


  // update(popup:PopupClass, config:any) {
  //
  // }

  close(popup: PopupComponent) {
    // return popup.component.close()
    // .then(() => {
    //   this.popups.splice(this.popups.indexOf(popup, 1));
    // });
  }

  onPopupClosed(event: any) {
    delete this.deletePopup(event.popupId);
  }


  closeAll(): Promise<any> {
    let promises: any[] = [];
    for(let popupId in this.popups) {
      promises.push(this.popups[popupId].close());
    }
    return Promise.all(promises);
  }


  private setPopup(popupId: number, popup: IPopupConfig | PopupComponent) {
    this.popups[popupId] = popup;
    if(this.popupIds.indexOf(popupId) < 0) {
      this.popupIds.push(popupId);
      this.checkIfDisplay();
    }
  }

  private deletePopup(popupId: number) {
    let index = this.popupIds.indexOf(popupId);
    if(index >= 0) {
      this.popupIds.splice(index, 1);
      this.checkIfDisplay();
    }
    delete this.popups[popupId];
  }


  private checkIfDisplay() {
    if(this.popupIds.length === 0) {
      this.element.style.display = 'none';
    } else {
      this.element.style.display = 'block';
    }
  }

  // get popupIds() {
  //   return Object.keys(this.popups);
  // }
}
