import { Builder } from "builder-pattern";

export class ImagensSliderModel{
    constructor(
        public imageId: number,
        public imagem: string
    ){}
}

export class MockImages{

    public gerarImagesMock(quantidade: number = 1): ImagensSliderModel[]{
        let images: ImagensSliderModel[] = []
            for(let i: number = 1; i < quantidade; i++){
                images.push(Builder<ImagensSliderModel>()
                            .imageId(i)
                            .imagem(`imagem-${i}.jpg`)
                            .build()
                );
            }
        return images;
    }
}