import { Builder } from 'builder-pattern';

export class PostsModel{
    constructor(
        public postsId: number,
        public titulo: string,
        public descricao: string,
        public resumo: string,
        public dataCreate: string,
        public autor: string,
        public slug: string,
        public image: string
    ){}
}

export class MockPost{

    public gerarPostsMock(quantidade: number = 1): PostsModel[]{
        let posts: PostsModel[] = []
            for(let i: number = 1; i < quantidade; i++){
                posts.push(Builder<PostsModel>()
                            .postsId(i)
                            .titulo(`teste noticia ${i}`)
                            .descricao("lore ipsulunlore ipsulunlore ipsulunlore ipsulunlore ipsulunlore ipsulun lore ipsulunlore ipsulunlore ipsulunlore ipsulun")
                            .resumo("ipsulunlore ipsulunlore ipsulunlore ipsulunlore ipsulun")
                            .dataCreate(new Date("15/09/2018").toString())
                            .autor("Abel Lopes")
                            .slug(`teste-noticia-${i}`)
                            .image(`post-${i}.jpg`)
                            .build()
                );
            }
        return posts;
    }
}