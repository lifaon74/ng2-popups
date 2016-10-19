import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng2ComponentInjectorModule } from 'ng2-component-injector';
import { PopupComponent } from './src/components/popup/popup.component';
import { PopupService } from './src/services/popup.service';
import { PopupsManagerComponent } from './src/components/manager/popups.manager.component';
export * from './src/components/manager/popups.manager.component';
export * from './src/components/popup/popup.component';
export * from './src/services/popup.service';
export var PopupModule = (function () {
    function PopupModule() {
    }
    PopupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, Ng2ComponentInjectorModule],
                    declarations: [
                        PopupComponent, PopupsManagerComponent
                    ],
                    providers: [
                        PopupService
                    ],
                    exports: [
                        PopupComponent, PopupsManagerComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    PopupModule.ctorParameters = [];
    return PopupModule;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXBvcHVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1wb3B1cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUI7T0FDdkMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlO09BQ2pDLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0I7T0FFNUQsRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0M7T0FDaEUsRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEI7T0FDcEQsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRDtBQUUxRixjQUFjLG1EQUFtRCxDQUFDO0FBQ2xFLGNBQWMsd0NBQXdDLENBQUM7QUFDdkQsY0FBYyw4QkFBOEIsQ0FBQztBQUk3QztJQUFBO0lBa0JBLENBQUM7SUFqQk0sc0JBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLENBQUM7b0JBQ25ELFlBQVksRUFBRTt3QkFDWixjQUFjLEVBQUUsc0JBQXNCO3FCQUN2QztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYyxFQUFFLHNCQUFzQjtxQkFDdkM7aUJBQ0YsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLDBCQUFjLEdBQTZELEVBQ2pGLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZzJDb21wb25lbnRJbmplY3Rvck1vZHVsZSB9IGZyb20gJ25nMi1jb21wb25lbnQtaW5qZWN0b3InO1xyXG5cclxuaW1wb3J0IHsgUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL3NyYy9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gJy4vc3JjL3NlcnZpY2VzL3BvcHVwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3B1cHNNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zcmMvY29tcG9uZW50cy9tYW5hZ2VyL3BvcHVwcy5tYW5hZ2VyLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb21wb25lbnRzL21hbmFnZXIvcG9wdXBzLm1hbmFnZXIuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwTW9kdWxlIHtcclxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmcyQ29tcG9uZW50SW5qZWN0b3JNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUG9wdXBDb21wb25lbnQsIFBvcHVwc01hbmFnZXJDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUG9wdXBTZXJ2aWNlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQb3B1cENvbXBvbmVudCwgUG9wdXBzTWFuYWdlckNvbXBvbmVudFxyXG4gIF1cclxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9IFtcbl07XG59XG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=