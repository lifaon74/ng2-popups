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
var popup_service_1 = require('../../services/popup.service');
var PopupsManagerComponent = (function () {
    function PopupsManagerComponent(popupService, element) {
        this.popupService = popupService;
        this.popups = {};
        this.popupIds = [];
        this.element = element.nativeElement;
        this.popupService.registerManager(this);
        this.checkIfDisplay();
    }
    PopupsManagerComponent.prototype.open = function (config) {
        var _this = this;
        var id = Math.floor(Math.random() * 10e10);
        this.setPopup(id, config);
        return new Promise(function (resolve, reject) {
            _this._resolveOpenPromise = resolve;
        });
    };
    PopupsManagerComponent.prototype.onPopupReady = function (event) {
        var _this = this;
        var config = this.popups[event.popupId];
        this.setPopup(event.popupId, event.popup);
        event.popup.open(config)
            .then(function () {
            _this._resolveOpenPromise(event.popup);
        });
    };
    PopupsManagerComponent.prototype.close = function (popup) {
    };
    PopupsManagerComponent.prototype.onPopupClosed = function (event) {
        delete this.deletePopup(event.popupId);
    };
    PopupsManagerComponent.prototype.closeAll = function () {
        var promises = [];
        for (var popupId in this.popups) {
            promises.push(this.popups[popupId].close());
        }
        return Promise.all(promises);
    };
    PopupsManagerComponent.prototype.setPopup = function (popupId, popup) {
        this.popups[popupId] = popup;
        if (this.popupIds.indexOf(popupId) < 0) {
            this.popupIds.push(popupId);
            this.checkIfDisplay();
        }
    };
    PopupsManagerComponent.prototype.deletePopup = function (popupId) {
        var index = this.popupIds.indexOf(popupId);
        if (index >= 0) {
            this.popupIds.splice(index, 1);
            this.checkIfDisplay();
        }
        delete this.popups[popupId];
    };
    PopupsManagerComponent.prototype.checkIfDisplay = function () {
        if (this.popupIds.length === 0) {
            this.element.style.display = 'none';
        }
        else {
            this.element.style.display = 'block';
        }
    };
    PopupsManagerComponent = __decorate([
        core_1.Component({
            selector: 'utx-popups',
            template: 'popups.manager.component.html',
            styleUrls: ['popups.manager.component.css']
        }), 
        __metadata('design:paramtypes', [popup_service_1.PopupService, core_1.ElementRef])
    ], PopupsManagerComponent);
    return PopupsManagerComponent;
}());
exports.PopupsManagerComponent = PopupsManagerComponent;
//# sourceMappingURL=popups.manager.component.js.map