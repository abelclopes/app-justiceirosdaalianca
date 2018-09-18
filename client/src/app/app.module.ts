import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { ShareadModule } from './sharead/sharead.module';
import { HomeServiceRest } from './components/home/service/home-service-rest';
import { HomeService } from './components/home/service/home-service';



import { CustomCurrencyMaskConfig } from './sharead/diretivas/custon-currency-masck-config';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CURRENCY_MASK_CONFIG } from 'ngx-currency/src/currency-mask.config';
import { GeproMaskUtilService } from './sharead/diretivas';
import { NgxCurrencyModule } from 'ngx-currency';
import { PaginationFilter } from './sharead/pagination-filter.pipe';
import { NotificationService } from './sharead/messages/notification.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ShareadModule.forRoot(),
    GeproMaskUtilService,
    NgxCurrencyModule
  ],
  providers: [
    HomeServiceRest,
    HomeService,    
    NotificationService,
    GeproMaskUtilService,    
    PaginationFilter, 
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
