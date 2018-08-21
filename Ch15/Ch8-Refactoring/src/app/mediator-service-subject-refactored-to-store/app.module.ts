import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ProductService} from "./product.service";
import {EbayComponent} from "./ebay.component";
import {SearchComponent} from "./search.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {AmazonComponent} from "./amazon.component";
import { reducer } from "./reducer";
import { SearchEffects } from './search.effects';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',        component: EbayComponent},
      {path: 'amazon', component: AmazonComponent}]),
    StoreModule.forRoot({myReducer: reducer}),
    EffectsModule.forRoot([SearchEffects])
  ],
  declarations: [ AppComponent, EbayComponent, AmazonComponent, SearchComponent],
  providers:[ProductService,
             {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
