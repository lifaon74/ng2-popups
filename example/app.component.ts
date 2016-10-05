import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';
import { PopupService } from '../src/services/popup.service';
import { PopupComponent } from '../src/components/popup/popup.component';

/***
 * Inject My component in a new popup
 */


@Component({
  selector: 'my-component',
  template: '<span (click)="popup.close()">my component : {{ input }}</span>'
})
export class MyComponent implements OnChanges {
  @Input() popup: PopupComponent; // MANDATORY
  @Input() input: string;

  ngOnChanges() {
    console.log(this.input);
  }
}


@Component({
  selector: 'my-app',
  template: '<utx-popups></utx-popups>'
})
export class AppComponent implements AfterViewInit {

  constructor(public popupService: PopupService) {

  }


  ngAfterViewInit() {
    this.popupService.open({
      component: MyComponent,
      inputs: {
        input: 'hello'
      }
    }).then((popup: PopupComponent) => {
      console.log('opened');

      popup.closePromise.then(() => {
        console.log('closed');
      });
    });
  }
}
