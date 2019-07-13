import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import 'datatables.net';
import 'datatables.net-bs4';
import { reducers, effects } from '../store';
import { storeFreeze } from 'ngrx-store-freeze';

const environment = {
  development: true,
  production: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent, MainComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
