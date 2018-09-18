import { HomeServiceRest } from "./home-service-rest";
import { Observable } from "rxjs";
import { PostsPagedListModel } from "../../../models/posts.pagination.model";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeService{

    constructor(private homeServiceRsst: HomeServiceRest){}

    public getPosts(pagina: number, tamanho: number, buscaTermo: string): Observable<PostsPagedListModel>{
        return this.homeServiceRsst.getPostsPaginacaoRest(pagina, tamanho, buscaTermo);
    }

}