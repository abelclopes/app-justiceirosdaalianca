import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SmallConteinerComponent } from './small-conteiner/small-conteiner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

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
export class ShareadModule { }
