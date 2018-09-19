import { Component, OnInit, ElementRef } from '@angular/core';
import { PostsModel, MockPost } from '../../models/posts-model';
import { ImagensSliderModel, MockImages } from '../../models/imagens-slider.model';
import { HomeService } from './service/home-service';
import { PostsPagedListModel } from '../../models/posts.pagination.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private termoFiltro = new Subject<string>();

  paginaAtual: number;
  tamanhoPagina = 10
  totalItens: number;
  listaPagedListModel: PostsPagedListModel;

  filter: PostsModel = <PostsModel>{};

  posts: PostsModel[] = []
  sliderImagens: ImagensSliderModel[] = []
  constructor(private homeService: HomeService, private _elementRef: ElementRef) {
    this.paginaAtual = 1;
  }

  ngOnInit() {
    
    this.termoFiltro.next("");

    // this.termoFiltro
    //   .debounceTime(200).switchMap(termo => this.homeService.getPosts(this.paginaAtual, this.tamanhoPagina, termo))
    //   .subscribe(x => {
    //     this.posts = x.resultado;
    //     this.totalItens = x.totalItens;
    //   })
    this.posts = new MockPost().gerarPostsMock(5);
    this.sliderImagens = new MockImages().gerarImagesMock(2);



  }




  filtrar(termo: string): void {
    this.termoFiltro.next(termo);
  }

  paginar(pagina: number, termo: string): void {
    this.paginaAtual = pagina;
    this.termoFiltro.next(termo);
  }

}
