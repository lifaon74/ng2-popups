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
var ng2_component_injector_1 = require('ng2-component-injector/ng2-component-injector');
var PopupComponent = (function () {
    function PopupComponent(componentInjectorService, element) {
        var _this = this;
        this.componentInjectorService = componentInjectorService;
        this.popupReady = new core_1.EventEmitter();
        this.popupClosed = new core_1.EventEmitter();
        this.closed = true;
        this.element = element.nativeElement;
        this.closePromise = new Promise(function (resolve, reject) {
            _this._resolveClosePromise = resolve;
        });
    }
    PopupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.popupReady.emit({
                popupId: _this.popupId,
                popup: _this
            });
        }, 0);
    };
    PopupComponent.prototype.ngOnDestroy = function () {
    };
    PopupComponent.prototype.open = function (config) {
        var _this = this;
        if (this.closed) {
            this.closed = false;
            return this.inject(config)
                .then(this.waitUntilPopupExists.bind(this))
                .then(function () {
                _this.element.classList.add('opened');
                return _this.timeoutPromise(_this.getTransitionTime(_this.element) || 250);
            });
        }
        else {
            return Promise.resolve();
        }
    };
    PopupComponent.prototype.close = function () {
        var _this = this;
        if (!this.closed) {
            this.closed = true;
            this.element.classList.remove('opened');
            return this.timeoutPromise(this.getTransitionTime(this.element) || 250)
                .then(function () {
                _this.popupClosed.emit({
                    popupId: _this.popupId,
                    popup: _this
                });
                _this._resolveClosePromise();
            });
        }
        else {
            return Promise.resolve();
        }
    };
    PopupComponent.prototype.onClickBackground = function (event) {
        if (event.target === this.element) {
            this.close();
        }
    };
    PopupComponent.prototype.waitUntilPopupExists = function () {
        var _this = this;
        this.element.id = 'popup-' + this.popupId;
        return new Promise(function (resolve, reject) {
            var timer = setInterval(function () {
                var popup = document.getElementById(_this.element.id);
                if (popup && (popup.getElementsByClassName('content').length > 0)) {
                    clearInterval(timer);
                    resolve();
                }
            }, 25);
        });
    };
    PopupComponent.prototype.timeoutPromise = function (timeout) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, timeout);
        });
    };
    PopupComponent.prototype.inject = function (config) {
        config.container = this.contentContainerRef;
        config.inputs = config.inputs || {};
        config.inputs.popup = this;
        return this.componentInjectorService.inject(config);
    };
    PopupComponent.prototype.getTransitionTime = function (element) {
        var computedStyle = window.getComputedStyle(element);
        if (computedStyle.transitionDuration) {
            var timeReg = new RegExp('([\\d\\.]+)((?:s)|(?:ms))', 'g');
            var timeMatch = timeReg.exec(computedStyle.transitionDuration);
            if (timeMatch) {
                var time = parseFloat(timeMatch[1]);
                switch (timeMatch[2]) {
                    case 's':
                        return time * 1000;
                    case 'ms':
                        return time;
                }
            }
        }
        return null;
    };
    __decorate([
        core_1.ViewChild('contentContainer', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], PopupComponent.prototype, "contentContainerRef", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PopupComponent.prototype, "popupId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PopupComponent.prototype, "popupReady", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PopupComponent.prototype, "popupClosed", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], PopupComponent.prototype, "onClickBackground", null);
    PopupComponent = __decorate([
        core_1.Component({
            selector: 'utx-popup',
            template: "\n    <div class=\"content\">\n      <template #contentContainer></template>\n    </div>\n  ",
            styles: ["\n    :host {\n      position: fixed;\n      z-index: 99;\n      display: block;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(0, 0, 0, 0.5);\n      opacity: 0;\n      transition: opacity 250ms;\n    }\n    :host .content {\n      width: 500px;\n      margin: 300px auto 50px;\n      background-color: white;\n      transform: translateY(-100px);\n      transition: transform 250ms;\n    }\n    :host.opened {\n      opacity: 1;\n    }\n    :host.opened .content {\n      transform: translateY(0);\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [ng2_component_injector_1.ComponentInjectorService, core_1.ElementRef])
    ], PopupComponent);
    return PopupComponent;
}());
exports.PopupComponent = PopupComponent;
//# sourceMappingURL=popup.component.js.map