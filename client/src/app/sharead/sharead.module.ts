import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SmallConteinerComponent } from './small-conteiner/small-conteiner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NotificationService } from './messages/notification.service';
import { PaginationFilter } from './pagination-filter.pipe';
import { GeproMaskUtilService } from './diretivas';

@NgModule({
  declarations: [
    SliderComponent,
    SmallConteinerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SliderComponent,
    SmallConteinerComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ShareadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareadModule,
      providers:[
        NotificationService,
        PaginationFilter,
        GeproMaskUtilService
      ]
    }
  }
 }
