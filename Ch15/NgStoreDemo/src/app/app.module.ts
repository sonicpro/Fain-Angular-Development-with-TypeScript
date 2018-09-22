import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { counterReducer } from "./reducer";
import { StoreModule } from "@ngrx/store";
import { ChildComponent } from './ChildComponent/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    // Configure the app-level store. The property for the counter is named counterState.
    StoreModule.forRoot({ counterState: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
