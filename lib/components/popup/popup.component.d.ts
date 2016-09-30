import { ViewContainerRef, ElementRef, OnDestroy, EventEmitter, AfterViewInit } from '@angular/core';
import { ComponentInjectorService } from 'ng2-component-injector/ng2-component-injector';
export declare class PopupComponent implements OnDestroy, AfterViewInit {
    private componentInjectorService;
    contentContainerRef: ViewContainerRef;
    popupId: number;
    popupReady: EventEmitter<{}>;
    popupClosed: EventEmitter<{}>;
    element: HTMLElement;
    closePromise: Promise<any>;
    private _resolveClosePromise;
    private closed;
    constructor(componentInjectorService: ComponentInjectorService, element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    open(config: any): Promise<any>;
    close(): Promise<any>;
    onClickBackground(event: any): void;
    private waitUntilPopupExists();
    private timeoutPromise(timeout);
    private inject(config);
    private getTransitionTime(element);
}
