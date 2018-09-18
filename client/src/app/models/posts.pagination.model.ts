import { PostsModel } from "./posts-model";


export interface PostsPagedListModel {
    totalItens?: number; 
    pageNumber?: number;
    pageSize?: number;
    resultado?: Array<PostsModel>;
    totalPages?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
    nextPageNumber?: number;
    previousPageNumber?: number;
}