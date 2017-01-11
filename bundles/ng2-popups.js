!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,u=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var l=0;l<i.dependencies.length;++l)i.dependencies[l]===o&&i.setters[l](a)}return o.locked=!1,r},r.name);o.setters=u.setters,o.execute=u.execute;for(var s=0,d=r.normalizedDeps.length;d>s;s++){var f,c=r.normalizedDeps[s],v=l[c],m=p[c];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=i(c),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[s]&&o.setters[s](f)}}}function o(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(d)for(var n in r)"default"!==n&&a(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,c(t,"__useDefault",{value:!0}),t}function a(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&c(e,t,n)}catch(o){return e[t]=r[t],!1}}function u(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(l[d]?u(d,t):i(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function i(e){if(m[e])return m[e];if("@node/"==e.substr(0,6))return m[e]=o(v(e.substr(6)));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),u(e,[]),l[e]=void 0,r.declarative&&c(r.module.exports,"__esModule",{value:!0}),m[e]=r.declarative?r.module.exports:r.esModule}var l={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},d=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(f){d=!1}var c;!function(){try{Object.defineProperty({},"a",{})&&(c=Object.defineProperty)}catch(e){c=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var p={},v="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,m={"@empty":{}};return function(e,t,n,a){return function(u){u(function(u){for(var l=0;l<t.length;l++)(function(e,r){r&&r.__esModule?m[e]=r:m[e]=o(r)})(t[l],arguments[l]);a({register:r});var s=i(e[0]);if(e.length>1)for(var l=1;l<e.length;l++)i(e[l]);return n?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], ["7","3","4"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", ["3", "4"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate, __metadata, core_1, ng2_component_injector_1, PopupComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_component_injector_1_1) {
                ng2_component_injector_1 = ng2_component_injector_1_1;
            }
        ],
        execute: function () {
            __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            PopupComponent = (function () {
                function PopupComponent(ng2ComponentInjectorService, element) {
                    var _this = this;
                    this.ng2ComponentInjectorService = ng2ComponentInjectorService;
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
                    // not empty
                };
                PopupComponent.prototype.open = function (config) {
                    var _this = this;
                    if (this.closed) {
                        this.closed = false;
                        return this.create(config)
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
                PopupComponent.prototype.create = function (config) {
                    config.container = this.contentContainerRef;
                    config.inputs = config.inputs || {};
                    config.inputs.popup = this;
                    return Promise.resolve(this.ng2ComponentInjectorService.create(config));
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
                };
                return PopupComponent;
            }());
            exports_1("PopupComponent", PopupComponent);
            __decorate([
                core_1.ViewChild('contentContainer', { read: core_1.ViewContainerRef }),
                __metadata("design:type", core_1.ViewContainerRef)
            ], PopupComponent.prototype, "contentContainerRef", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], PopupComponent.prototype, "popupId", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], PopupComponent.prototype, "popupReady", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], PopupComponent.prototype, "popupClosed", void 0);
            __decorate([
                core_1.HostListener('click', ['$event']),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [Object]),
                __metadata("design:returntype", void 0)
            ], PopupComponent.prototype, "onClickBackground", null);
            exports_1("PopupComponent", PopupComponent = __decorate([
                core_1.Component({
                    selector: 'utx-popup',
                    // templateUrl: 'popup.component.html',
                    // styleUrls: ['popup.component.css']
                    template: "\n    <div class=\"content\">\n      <template #contentContainer></template>\n    </div>\n  ",
                    styles: ["\n    :host {\n      position: fixed;\n      z-index: 99;\n      display: block;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(0, 0, 0, 0.5);\n      opacity: 0;\n      transition: opacity 250ms;\n    }\n    :host .content {\n      width: 500px;\n      margin: 300px auto 50px;\n      background-color: white;\n      transform: translateY(-100px);\n      transition: transform 250ms;\n    }\n    :host.opened {\n      opacity: 1;\n    }\n    :host.opened .content {\n      transform: translateY(0);\n    }\n  "]
                }),
                __metadata("design:paramtypes", [ng2_component_injector_1.Ng2ComponentInjectorService,
                    core_1.ElementRef])
            ], PopupComponent));
        }
    };
});

$__System.register("5", ["3"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate, __metadata, core_1, PopupService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            /**
             Example :
            
             let popup;
            
             (<any>window)._open = () => {
                  NgZone.run(() => {
                    this.popupService.open({
                      component: MyComponent,
                      inputs: {
                        input: 'hello'
                      }
                    }).then((popup:any) => {
                       popup.closePromise.then(() => {
                        console.log('closed');
                      });
            
                      (<any>window)._close = () => {
                        NgZone.run(() => {
                          popup.close();
                        });
                      };
                    });
                  });
                };
            
            
            
             **/
            PopupService = (function () {
                function PopupService() {
                    this.manager = null;
                    // not empty
                }
                PopupService.prototype.registerManager = function (manager) {
                    this.manager = manager;
                };
                PopupService.prototype.open = function (config) {
                    if (this.manager) {
                        return this.manager.open(config);
                    }
                    else {
                        return Promise.reject(new Error('No manager for PopupService'));
                    }
                };
                PopupService.prototype.update = function (popup, config) {
                    // if(this.manager) {
                    //   return this.manager.update(popup, config);
                    // } else {
                    //   throw new Error('No manager for PopupService');
                    // }
                };
                PopupService.prototype.close = function (popup) {
                    return popup.close();
                };
                PopupService.prototype.closeAll = function () {
                    if (this.manager) {
                        return this.manager.closeAll();
                    }
                    else {
                        return Promise.reject(new Error('No manager for PopupService'));
                    }
                };
                return PopupService;
            }());
            exports_1("PopupService", PopupService);
            exports_1("PopupService", PopupService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], PopupService));
        }
    };
});

$__System.register("6", ["3", "5"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate, __metadata, core_1, popup_service_1, PopupsManagerComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (popup_service_1_1) {
                popup_service_1 = popup_service_1_1;
            }
        ],
        execute: function () {
            __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            PopupsManagerComponent = (function () {
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
                // update(popup:PopupClass, config:any) {
                //
                // }
                PopupsManagerComponent.prototype.close = function (popup) {
                    // return popup.component.close()
                    // .then(() => {
                    //   this.popups.splice(this.popups.indexOf(popup, 1));
                    // });
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
                return PopupsManagerComponent;
            }());
            exports_1("PopupsManagerComponent", PopupsManagerComponent);
            exports_1("PopupsManagerComponent", PopupsManagerComponent = __decorate([
                core_1.Component({
                    selector: 'utx-popups',
                    // templateUrl: 'popups.manager.component.html',
                    // styleUrls: ['popups.manager.component.css']
                    template: "\n    <utx-popup\n      *ngFor=\"let popupId of popupIds\"\n      (popupReady)=\"onPopupReady($event)\"\n      (popupClosed)=\"onPopupClosed($event)\"\n      [popupId]=\"popupId\"\n    ></utx-popup>\n  ",
                    styles: ["\n    :host {\n      z-index: 99;\n      display: block;\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  "]
                }),
                __metadata("design:paramtypes", [popup_service_1.PopupService,
                    core_1.ElementRef])
            ], PopupsManagerComponent));
        }
    };
});

$__System.register("1", ["7", "3", "4", "2", "5", "6"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate, __metadata, common_1, core_1, ng2_component_injector_1, popup_component_1, popup_service_1, popups_manager_component_1, PopupModule;
    var exportedNames_1 = {
        "PopupModule": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n))
                exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_component_injector_1_1) {
                ng2_component_injector_1 = ng2_component_injector_1_1;
            },
            function (popup_component_1_1) {
                popup_component_1 = popup_component_1_1;
                exportStar_1(popup_component_1_1);
            },
            function (popup_service_1_1) {
                popup_service_1 = popup_service_1_1;
                exportStar_1(popup_service_1_1);
            },
            function (popups_manager_component_1_1) {
                popups_manager_component_1 = popups_manager_component_1_1;
                exportStar_1(popups_manager_component_1_1);
            }
        ],
        execute: function () {
            __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            PopupModule = (function () {
                function PopupModule() {
                }
                return PopupModule;
            }());
            exports_1("PopupModule", PopupModule);
            exports_1("PopupModule", PopupModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, ng2_component_injector_1.Ng2ComponentInjectorModule],
                    declarations: [
                        popup_component_1.PopupComponent, popups_manager_component_1.PopupsManagerComponent
                    ],
                    providers: [
                        popup_service_1.PopupService
                    ],
                    exports: [
                        popup_component_1.PopupComponent, popups_manager_component_1.PopupsManagerComponent
                    ]
                }),
                __metadata("design:paramtypes", [])
            ], PopupModule));
        }
    };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["@angular/common","@angular/core","ng2-component-injector"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("@angular/common"), require("@angular/core"), require("ng2-component-injector"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});