import { NgModule } from '@angular/core';
import { AppComponent, MyComponent } from './app.component';
import { PopupService } from '../src/services/popup.service';

@NgModule({
  providers: [PopupService],
  declarations: [AppComponent, MyComponent],
  entryComponents: [MyComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
