import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
