import { Component, OnInit, Input } from '@angular/core';
import { ImagensSliderModel } from '../../models/imagens-slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input('sliderImagens')
  sliderImagens: ImagensSliderModel[]

  constructor() { }

  ngOnInit() {
    console.log(this.sliderImagens);
    
  }

  public getImagem(item):string {
    return `assets/images/wow/${item.imagem}`;
  }
}
