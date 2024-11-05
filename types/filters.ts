export type FilterType = {
    results: ResultFilterTypes | null;
    loading: boolean;
    error: string;
}

export type ResultFilterTypes = {
    data: {
        schema: {
            attributes: {
                origin: {
                    enum: any
                }
            }
        }
    }
}