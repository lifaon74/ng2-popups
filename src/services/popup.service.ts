import { Injectable } from '@angular/core';
import { PopupComponent } from '../components/popup/popup.component';

/**
 Example :

 let popup;

 (<any>window)._open = () => {
      NgZone.run(() => {
        this.popupService.open({
          component: MyComponent,
          inputs: {
            input: 'hello'
          }
        }).then((popup:any) => {
           popup.closePromise.then(() => {
            console.log('closed');
          });

          (<any>window)._close = () => {
            NgZone.run(() => {
              popup.close();
            });
          };
        });
      });
    };



 **/

@Injectable()
export class PopupService {

  private manager: any = null;

  constructor() {
    // not empty
  }

  registerManager(manager: any) {
    this.manager = manager;
  }

  open(config: any): Promise<any> {
    if(this.manager) {
      return this.manager.open(config);
    } else {
      return Promise.reject(new Error('No manager for PopupService'));
    }
  }

  update(popup: any, config: any) {
    // if(this.manager) {
    //   return this.manager.update(popup, config);
    // } else {
    //   throw new Error('No manager for PopupService');
    // }
  }

  close(popup: PopupComponent): Promise<any> {
    return popup.close();
  }

  closeAll(): Promise<any> {
    if(this.manager) {
      return this.manager.closeAll();
    } else {
      return Promise.reject(new Error('No manager for PopupService'));
    }
  }

}
