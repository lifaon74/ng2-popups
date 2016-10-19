!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,u=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var l=0;l<i.dependencies.length;++l)i.dependencies[l]===o&&i.setters[l](a)}return o.locked=!1,r},r.name);o.setters=u.setters,o.execute=u.execute;for(var s=0,d=r.normalizedDeps.length;d>s;s++){var f,c=r.normalizedDeps[s],v=l[c],m=p[c];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=i(c),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[s]&&o.setters[s](f)}}}function o(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(d)for(var n in r)"default"!==n&&a(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,c(t,"__useDefault",{value:!0}),t}function a(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&c(e,t,n)}catch(o){return e[t]=r[t],!1}}function u(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(l[d]?u(d,t):i(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function i(e){if(m[e])return m[e];if("@node/"==e.substr(0,6))return m[e]=o(v(e.substr(6)));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),u(e,[]),l[e]=void 0,r.declarative&&c(r.module.exports,"__esModule",{value:!0}),m[e]=r.declarative?r.module.exports:r.esModule}var l={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},d=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(f){d=!1}var c;!function(){try{Object.defineProperty({},"a",{})&&(c=Object.defineProperty)}catch(e){c=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var p={},v="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,m={"@empty":{}};return function(e,t,n,a){return function(u){u(function(u){for(var l=0;l<t.length;l++)(function(e,r){r&&r.__esModule?m[e]=r:m[e]=o(r)})(t[l],arguments[l]);a({register:r});var s=i(e[0]);if(e.length>1)for(var l=1;l<e.length;l++)i(e[l]);return n?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], ["7","3","4"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", ["3", "4"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, ng2_component_injector_1;
    var PopupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_component_injector_1_1) {
                ng2_component_injector_1 = ng2_component_injector_1_1;
            }],
        execute: function() {
            exports_1("PopupComponent", PopupComponent = (function () {
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
                    return this.ng2ComponentInjectorService.inject(config);
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
                PopupComponent.decorators = [
                    { type: core_1.Component, args: [{
                                selector: 'utx-popup',
                                // templateUrl: 'popup.component.html',
                                // styleUrls: ['popup.component.css']
                                template: "\n    <div class=\"content\">\n      <template #contentContainer></template>\n    </div>\n  ",
                                styles: ["\n    :host {\n      position: fixed;\n      z-index: 99;\n      display: block;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(0, 0, 0, 0.5);\n      opacity: 0;\n      transition: opacity 250ms;\n    }\n    :host .content {\n      width: 500px;\n      margin: 300px auto 50px;\n      background-color: white;\n      transform: translateY(-100px);\n      transition: transform 250ms;\n    }\n    :host.opened {\n      opacity: 1;\n    }\n    :host.opened .content {\n      transform: translateY(0);\n    }\n  "]
                            },] },
                ];
                /** @nocollapse */
                PopupComponent.ctorParameters = [
                    { type: ng2_component_injector_1.Ng2ComponentInjectorService, },
                    { type: core_1.ElementRef, },
                ];
                PopupComponent.propDecorators = {
                    'contentContainerRef': [{ type: core_1.ViewChild, args: ['contentContainer', { read: core_1.ViewContainerRef },] },],
                    'popupId': [{ type: core_1.Input },],
                    'popupReady': [{ type: core_1.Output },],
                    'popupClosed': [{ type: core_1.Output },],
                    'onClickBackground': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
                };
                return PopupComponent;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9wdXAuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFFVyxjQUFjOzs7Ozs7Ozs7O1lBQWQsNEJBQUEsY0FBYyxHQUFHLENBQUM7Z0JBQ3pCLHdCQUF3QiwyQkFBMkIsRUFBRSxPQUFPO29CQUN4RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQywyQkFBMkIsR0FBRywyQkFBMkIsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO3dCQUNyRCxLQUFLLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELGNBQWMsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHO29CQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2pCLFVBQVUsQ0FBQzt3QkFDUCxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzs0QkFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPOzRCQUN0QixLQUFLLEVBQUUsS0FBSzt5QkFDZixDQUFDLENBQUM7b0JBQ1AsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUMsQ0FBQztnQkFDRixjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztvQkFDbkMsWUFBWTtnQkFDaEIsQ0FBQyxDQUFDO2dCQUNGLGNBQWMsQ0FBQyxT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
$__System.register("5", ["3"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var PopupService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
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
            exports_1("PopupService", PopupService = (function () {
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
                PopupService.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                PopupService.ctorParameters = [];
                return PopupService;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvcHVwLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQThCVyxZQUFZOzs7Ozs7O1lBN0J2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkE0Qkk7WUFDTywwQkFBQSxZQUFZLEdBQUcsQ0FBQztnQkFDdkI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLFlBQVk7Z0JBQ2hCLENBQUM7Z0JBQ0QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsVUFBVSxPQUFPO29CQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDM0IsQ0FBQyxDQUFDO2dCQUNGLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsTUFBTTtvQkFDMUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNyQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztvQkFDcEUsQ0FBQztnQkFDTCxDQUFDLENBQUM7Z0JBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxLQUFLLEVBQUUsTUFBTTtvQkFDbkQscUJBQXFCO29CQUNyQiwrQ0FBK0M7b0JBQy9DLFdBQVc7b0JBQ1gsb0RBQW9EO29CQUNwRCxJQUFJO2dCQUNSLENBQUMsQ0FBQztnQkFDRixZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEtBQUs7b0JBQzFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQztnQkFDRixZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRztvQkFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ25DLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFDRixZQUFZLENBQUMsVUFBVSxHQUFHO29CQUN0QixFQUFFLElBQUksRUFBRSxpQkFBVSxFQUFFO2lCQUN2QixDQUFDO2dCQUNGLGtCQUFrQjtnQkFDbEIsWUFBWSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDOzs7O0FBQ0wsczNIQUFzM0gifQ==
$__System.register("6", ["3", "5"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, popup_service_1;
    var PopupsManagerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (popup_service_1_1) {
                popup_service_1 = popup_service_1_1;
            }],
        execute: function() {
            exports_1("PopupsManagerComponent", PopupsManagerComponent = (function () {
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
                // get popupIds() {
                //   return Object.keys(this.popups);
                // }
                PopupsManagerComponent.decorators = [
                    { type: core_1.Component, args: [{
                                selector: 'utx-popups',
                                // templateUrl: 'popups.manager.component.html',
                                // styleUrls: ['popups.manager.component.css']
                                template: "\n    <utx-popup\n      *ngFor=\"let popupId of popupIds\"\n      (popupReady)=\"onPopupReady($event)\"\n      (popupClosed)=\"onPopupClosed($event)\"\n      [popupId]=\"popupId\"\n    ></utx-popup>\n  ",
                                styles: ["\n    :host {\n      z-index: 99;\n      display: block;\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  "]
                            },] },
                ];
                /** @nocollapse */
                PopupsManagerComponent.ctorParameters = [
                    { type: popup_service_1.PopupService, },
                    { type: core_1.ElementRef, },
                ];
                return PopupsManagerComponent;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXBzLm1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9wdXBzLm1hbmFnZXIuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFFVyxzQkFBc0I7Ozs7Ozs7Ozs7WUFBdEIsb0NBQUEsc0JBQXNCLEdBQUcsQ0FBQztnQkFDakMsZ0NBQWdDLFlBQVksRUFBRSxPQUFPO29CQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztvQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0Qsc0JBQXNCLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFVLE1BQU07b0JBQ3BELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMxQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTt3QkFDeEMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDO2dCQUNGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxLQUFLO29CQUMzRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7eUJBQ25CLElBQUksQ0FBQzt3QkFDTixLQUFLLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUM7Z0JBQ0YseUNBQXlDO2dCQUN6QyxFQUFFO2dCQUNGLElBQUk7Z0JBQ0osc0JBQXNCLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEtBQUs7b0JBQ3BELGlDQUFpQztvQkFDakMsZ0JBQWdCO29CQUNoQix1REFBdUQ7b0JBQ3ZELE1BQU07Z0JBQ1YsQ0FBQyxDQUFDO2dCQUNGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxLQUFLO29CQUM1RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUM7Z0JBQ0Ysc0JBQXNCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRztvQkFDeEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ2hELENBQUM7b0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztnQkFDRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsT0FBTyxFQUFFLEtBQUs7b0JBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFDRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsT0FBTztvQkFDNUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDO29CQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDO2dCQUNGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUc7b0JBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ3hDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDekMsQ0FBQztnQkFDTCxDQUFDLENBQUM7Z0JBQ0YsbUJBQW1CO2dCQUNuQixxQ0FBcUM7Z0JBQ3JDLElBQUk7Z0JBQ0osc0JBQXNCLENBQUMsVUFBVSxHQUFHO29CQUNoQyxFQUFFLElBQUksRUFBRSxnQkFBUyxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUNkLFFBQVEsRUFBRSxZQUFZO2dDQUN0QixnREFBZ0Q7Z0NBQ2hELDhDQUE4QztnQ0FDOUMsUUFBUSxFQUFFLDRNQUE0TTtnQ0FDdE4sTUFBTSxFQUFFLENBQUMsK0pBQStKLENBQUM7NkJBQzVLLEVBQUUsRUFBRTtpQkFDaEIsQ0FBQztnQkFDRixrQkFBa0I7Z0JBQ2xCLHNCQUFzQixDQUFDLGNBQWMsR0FBRztvQkFDcEMsRUFBRSxJQUFJLEVBQUUsNEJBQVksR0FBRztvQkFDdkIsRUFBRSxJQUFJLEVBQUUsaUJBQVUsR0FBRztpQkFDeEIsQ0FBQztnQkFDRixNQUFNLENBQUMsc0JBQXNCLENBQUM7WUFDbEMsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDOzs7O0FBQ0wsa3VQQUFrdVAifQ==
$__System.register("1", ["7", "3", "4", "2", "5", "6"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1, core_1, ng2_component_injector_1, popup_component_1, popup_service_1, popups_manager_component_1;
    var PopupModule;
    var exportedNames_1 = {
        'PopupModule': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
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
            }],
        execute: function() {
            exports_1("PopupModule", PopupModule = (function () {
                function PopupModule() {
                }
                PopupModule.decorators = [
                    { type: core_1.NgModule, args: [{
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
                            },] },
                ];
                /** @nocollapse */
                PopupModule.ctorParameters = [];
                return PopupModule;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXBvcHVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1wb3B1cHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVNXLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQVgseUJBQUEsV0FBVyxHQUFHLENBQUM7Z0JBQ3RCO2dCQUNBLENBQUM7Z0JBQ0QsV0FBVyxDQUFDLFVBQVUsR0FBRztvQkFDckIsRUFBRSxJQUFJLEVBQUUsZUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUNiLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsbURBQTBCLENBQUM7Z0NBQ25ELFlBQVksRUFBRTtvQ0FDVixnQ0FBYyxFQUFFLGlEQUFzQjtpQ0FDekM7Z0NBQ0QsU0FBUyxFQUFFO29DQUNQLDRCQUFZO2lDQUNmO2dDQUNELE9BQU8sRUFBRTtvQ0FDTCxnQ0FBYyxFQUFFLGlEQUFzQjtpQ0FDekM7NkJBQ0osRUFBRSxFQUFFO2lCQUNoQixDQUFDO2dCQUNGLGtCQUFrQjtnQkFDbEIsV0FBVyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDOzs7O0FBQ0wsMGhGQUEwaEYifQ==
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["@angular/common","@angular/core","ng2-component-injector"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("@angular/common"), require("@angular/core"), require("ng2-component-injector"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});