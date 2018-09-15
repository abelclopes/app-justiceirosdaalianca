import { Component, OnInit } from '@angular/core';
import { PostsModel, MockPost } from '../../models/posts-model';
import { ImagensSliderModel, MockImages } from '../../models/imagens-slider.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: PostsModel[] = []
  sliderImagens: ImagensSliderModel[] = []
  constructor() { }

  ngOnInit() {
    this.posts = new MockPost().gerarPostsMock(5);
    this.sliderImagens = new MockImages().gerarImagesMock(2);
  }

}
