type ImageType = {
    id: number;
    url: string;
}

export type ProductType = {
    id: number,
    productName: string,
    slug: string;
    description: string,
    active: boolean,
    isFeatured: boolean,
    taste: string,
    origin: string,
    price: number,
    images: Array<ImageType>;
    category: {
        categoryName: string,
        slug: string,
    }
}