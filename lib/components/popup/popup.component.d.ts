export class PopupComponent {

  element:HTMLElement;
  closePromise:Promise<any>;

  open(config:any):Promise<any>;

  close();
}
