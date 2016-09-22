export class PopupsManagerComponent {

  element:HTMLElement;

  popups:any = {};
  popupIds:number[] = [];

  open(config:any):Promise<any>;

  closeAll():Promise<any>;
}
