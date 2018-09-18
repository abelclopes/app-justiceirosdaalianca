import { Injectable } from "@angular/core";
import { PostsPagedListModel } from "../../../models/posts.pagination.model";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { API_URL } from "../../../app.api";

@Injectable()
export class HomeServiceRest {

    private httpHeaders: HttpHeaders;

    constructor(protected httpClient: HttpClient) {
        this.httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('No-Auth', 'true')
    }

    public getPostsPaginacaoRest(pagina = 1, tamanho = 10, buscaTermo: string): Observable<PostsPagedListModel> {
        if (buscaTermo == undefined) { buscaTermo = ''; }
        return this.httpClient.get<PostsPagedListModel>(`${API_URL}/api/posts?PageNumber=${pagina}&PageSize=${tamanho}&buscaTermo=${buscaTermo}`, {
            headers: this.httpHeaders, responseType: 'json'
        });
    }

}