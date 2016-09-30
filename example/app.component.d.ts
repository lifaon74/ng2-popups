import { OnChanges, AfterViewInit } from '@angular/core';
import { PopupService } from '../lib/services/popup.service';
import { PopupComponent } from '../lib/components/popup/popup.component';
export declare class MyComponent implements OnChanges {
    popup: PopupComponent;
    input: string;
    ngOnChanges(): void;
}
export declare class AppComponent implements AfterViewInit {
    popupService: PopupService;
    constructor(popupService: PopupService);
    ngAfterViewInit(): void;
}
