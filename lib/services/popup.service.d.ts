import {PopupComponent} from '../components/popup/popup.component';

export class PopupService {

  open(config:any):Promise<any>;

  close(popup:PopupComponent):Promise<any>;

  closeAll():Promise<any>;
}
