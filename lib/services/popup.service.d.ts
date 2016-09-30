import { PopupComponent } from '../components/popup/popup.component';
export declare class PopupService {
    private manager;
    constructor();
    registerManager(manager: any): void;
    open(config: any): Promise<any>;
    update(popup: any, config: any): void;
    close(popup: PopupComponent): Promise<any>;
    closeAll(): Promise<any>;
}
