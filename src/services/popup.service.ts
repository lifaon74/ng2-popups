import { Injectable } from '@angular/core';
import { PopupComponent } from '../components/popup/popup.component';
import { PopupsManagerComponent } from '../components/manager/popups.manager.component';

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

	private manager: PopupsManagerComponent = null;

	constructor() {
		// not empty
	}

	registerManager(manager: PopupsManagerComponent) {
		this.manager = manager;
	}

	open(config: IPopupConfig): Promise<PopupComponent> {
		if (this.manager) {
			return this.manager.open(config);
		} else {
			return Promise.reject(new Error('No manager for PopupService'));
		}
	}

	update(popup: any, config: IPopupConfig) {
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
		if (this.manager) {
			return this.manager.closeAll();
		} else {
			return Promise.reject(new Error('No manager for PopupService'));
		}
	}

}

export interface IPopupConfig {
	component: any;
	inputs?: any; // {Object} the inputs to pass to the component
	outputs?: any; // {Object} the outputs to listen to the component
	popupClass?: string;
	backdropClosable?: boolean;
}