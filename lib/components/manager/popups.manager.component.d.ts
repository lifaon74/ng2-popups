import { ElementRef } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { PopupService } from '../../services/popup.service';
export declare class PopupsManagerComponent {
    private popupService;
    element: HTMLElement;
    popups: any;
    popupIds: number[];
    private _resolveOpenPromise;
    constructor(popupService: PopupService, element: ElementRef);
    open(config: any): Promise<PopupComponent>;
    onPopupReady(event: any): void;
    close(popup: PopupComponent): void;
    onPopupClosed(event: any): void;
    closeAll(): Promise<any>;
    private setPopup(popupId, popup);
    private deletePopup(popupId);
    private checkIfDisplay();
}
