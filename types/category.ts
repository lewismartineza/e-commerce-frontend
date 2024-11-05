type ImageType = {
    id: number;
    url: string;
}

export type CategoryType = {
    id: number,
    categoryName: string,
    slug: string,
    mainImage: {
        id: number;
        url: string;
    }
}