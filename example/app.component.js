"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var popup_service_1 = require('../lib/services/popup.service');
var popup_component_1 = require('../lib/components/popup/popup.component');
var MyComponent = (function () {
    function MyComponent() {
    }
    MyComponent.prototype.ngOnChanges = function () {
        console.log(this.input);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', popup_component_1.PopupComponent)
    ], MyComponent.prototype, "popup", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MyComponent.prototype, "input", void 0);
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: '<span (click)="popup.close()">my component : {{ input }}</span>'
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
var AppComponent = (function () {
    function AppComponent(popupService) {
        this.popupService = popupService;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.popupService.open({
            component: MyComponent,
            inputs: {
                input: 'hello'
            }
        }).then(function (popup) {
            console.log('opened');
            popup.closePromise.then(function () {
                console.log('closed');
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<utx-popups></utx-popups>'
        }), 
        __metadata('design:paramtypes', [popup_service_1.PopupService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map