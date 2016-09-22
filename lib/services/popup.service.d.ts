import {PopupComponent} from '../components/popup/popup.component';

export class PopupService {

  registerManager(manager:any):any;

  open(config:any):Promise<any>;

  close(popup:PopupComponent):Promise<any>;

  closeAll():Promise<any>;

}
