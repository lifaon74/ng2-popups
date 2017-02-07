import {
  Component, ViewContainerRef, ViewChild, ElementRef, Input, Output, OnDestroy, EventEmitter, AfterViewInit,
  HostListener
} from '@angular/core';
import { Ng2ComponentInjectorService } from 'ng2-component-injector';
import { IPopupConfig } from '../../services/popup.service';

@Component({
  selector: 'utx-popup',
  // templateUrl: 'popup.component.html',
  // styleUrls: ['popup.component.css']
  template: `
    <div class="content {{contentClassName}}">
      <template #contentContainer></template>
    </div>
  `,
  styles: [`
    :host {
      position: fixed;
      z-index: 99;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 250ms;
    }
    :host .content {
      width: 500px;
      margin: 300px auto 50px;
      background-color: white;
      transform: translateY(-100px);
      transition: transform 250ms;
    }
    :host.opened {
      opacity: 1;
    }
    :host.opened .content {
      transform: translateY(0);
    }
  `]
})
export class PopupComponent implements OnDestroy, AfterViewInit {

  @ViewChild('contentContainer', { read: ViewContainerRef }) contentContainerRef: ViewContainerRef;

  @Input() popupId: number;
  @Output() popupReady = new EventEmitter();
  @Output() popupClosed = new EventEmitter();

  element: HTMLElement;
  closePromise: Promise<any>;

  contentClassName: string = '';

  private backdropClosable: boolean = true;
  private _resolveClosePromise: any;
  private closed: boolean = true;

  constructor(private ng2ComponentInjectorService: Ng2ComponentInjectorService,
              element: ElementRef) {
    this.element = element.nativeElement;

    this.closePromise = new Promise<any>((resolve: any, reject: any) => {
      this._resolveClosePromise = resolve;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.popupReady.emit({
        popupId: this.popupId,
        popup: this
      });
    }, 0);
  }


  ngOnDestroy() {
    // not empty
  }


  open(config: IPopupConfigInner): Promise<any> {
    if(this.closed) {
      this.closed = false;
      return this.create(config)
        .then(this.waitUntilPopupExists.bind(this))
        .then(() => {
          this.element.classList.add('opened');
          return this.timeoutPromise(this.getTransitionTime(this.element) || 250);
        });
    } else {
      return Promise.resolve();
      //return Promise.reject(null);
    }
  }

  close(): Promise<any> {
    if(!this.closed) {
      this.closed = true;
      this.element.classList.remove('opened');
      return this.timeoutPromise(this.getTransitionTime(this.element) || 250)
        .then(() => {
          this.popupClosed.emit({
            popupId: this.popupId,
            popup: this
          });

          this._resolveClosePromise();
        });
    } else {
      return Promise.resolve();
      //return Promise.reject(null);
    }
  }


  @HostListener('click', ['$event']) onClickBackground(event: any) {
    if (!this.backdropClosable) {
      return;
    }
    if(event.target === this.element) {
      this.close();
    }
  }

  private waitUntilPopupExists(): Promise<any> {
    this.element.id = 'popup-' + this.popupId;
    return new Promise((resolve: any, reject: any) => {
      let timer: any = setInterval(() => {
        let popup: HTMLElement = document.getElementById(this.element.id);
        if(popup && (popup.getElementsByClassName('content').length > 0)) {
          clearInterval(timer);
          resolve();
        }
      }, 25);
    });
  }

  private timeoutPromise(timeout: number): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  private create(config: IPopupConfigInner) {
    config.container = this.contentContainerRef;
    config.inputs = config.inputs || {};
    config.inputs.popup = this;

    this.contentClassName = config.popupClass || '';
    this.backdropClosable = config.backdropClosable === undefined ? true : config.backdropClosable;

    return Promise.resolve(this.ng2ComponentInjectorService.create(config));
  }

  private getTransitionTime(element: HTMLElement) {
    let computedStyle = window.getComputedStyle(element);
    if(computedStyle.transitionDuration) {
      let timeReg = new RegExp('([\\d\\.]+)((?:s)|(?:ms))', 'g');
      let timeMatch = timeReg.exec(computedStyle.transitionDuration);
      if(timeMatch) {
        let time = parseFloat(timeMatch[1]);
        switch(timeMatch[2]) {
          case 's':
            return time * 1000;
          case 'ms':
            return time;
        }
      }
    }

    // if(computedStyle.transition) {
    //   let reg = new RegExp('([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+)', 'g');
    //   let match = reg.exec(computedStyle.transition);
    //   if(match) {
    //     let timeReg = new RegExp('([\\d\\.]+)((?:s)|(?:ms))', 'g');
    //     let timeMatch = timeReg.exec(match[2]);
    //     if(timeMatch) {
    //       let time = parseFloat(timeMatch[1]);
    //       switch(timeMatch[2]) {
    //         case 's':
    //           return time * 1000;
    //           break;
    //         case 'ms':
    //           return time;
    //           break;
    //       }
    //     }
    //   }
    // }

    return null;
  }

}


export interface IPopupConfigInner extends IPopupConfig {
  container: any;
}