import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentInjectorService } from 'ng2-component-injector';
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
                    imports: [CommonModule],
                    declarations: [
                        PopupComponent, PopupsManagerComponent
                    ],
                    providers: [
                        PopupService, ComponentInjectorService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXBvcHVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1wb3B1cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUI7T0FDdkMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlO09BQ2pDLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3QkFBd0I7T0FFMUQsRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0M7T0FDaEUsRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEI7T0FDcEQsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRDtBQUcxRixjQUFjLG1EQUFtRCxDQUFDO0FBQ2xFLGNBQWMsd0NBQXdDLENBQUM7QUFDdkQsY0FBYyw4QkFBOEIsQ0FBQztBQUk3QztJQUFBO0lBa0JBLENBQUM7SUFqQk0sc0JBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixjQUFjLEVBQUUsc0JBQXNCO3FCQUN2QztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsWUFBWSxFQUFFLHdCQUF3QjtxQkFDdkM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWMsRUFBRSxzQkFBc0I7cUJBQ3ZDO2lCQUNGLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCwwQkFBYyxHQUE2RCxFQUNqRixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50SW5qZWN0b3JTZXJ2aWNlIH0gZnJvbSAnbmcyLWNvbXBvbmVudC1pbmplY3Rvcic7XHJcblxyXG5pbXBvcnQgeyBQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vc3JjL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9wdXBTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvc2VydmljZXMvcG9wdXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvcHVwc01hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3NyYy9jb21wb25lbnRzL21hbmFnZXIvcG9wdXBzLm1hbmFnZXIuY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb21wb25lbnRzL21hbmFnZXIvcG9wdXBzLm1hbmFnZXIuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NyYy9zZXJ2aWNlcy9wb3B1cC5zZXJ2aWNlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwTW9kdWxlIHtcclxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQb3B1cENvbXBvbmVudCwgUG9wdXBzTWFuYWdlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQb3B1cFNlcnZpY2UsIENvbXBvbmVudEluamVjdG9yU2VydmljZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUG9wdXBDb21wb25lbnQsIFBvcHVwc01hbmFnZXJDb21wb25lbnRcclxuICBdXHJcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSBbXG5dO1xufVxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19