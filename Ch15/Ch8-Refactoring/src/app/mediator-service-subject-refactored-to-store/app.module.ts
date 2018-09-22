import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, RouterState} from "@angular/router";
import {ProductService} from "./product.service";
import {EbayComponent} from "./ebay.component";
import {SearchComponent} from "./search.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {AmazonComponent} from "./amazon.component";
import { reducer } from "./reducer";
import { Effects } from './effects';
import { MyRouterSerializer } from "./serializer"

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',        component: EbayComponent},
      {path: 'amazon', component: AmazonComponent}]),
    StoreModule.forRoot({
      myReducer: reducer,
      myRouterReducer: routerReducer
    }),
    EffectsModule.forRoot([Effects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: "myRouterReducer" // store the name of the router reducer.
    }),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [ AppComponent, EbayComponent, AmazonComponent, SearchComponent],
  providers:[ProductService,
             {provide: LocationStrategy, useClass: HashLocationStrategy},
            { provide: RouterStateSerializer, useClass: MyRouterSerializer }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
