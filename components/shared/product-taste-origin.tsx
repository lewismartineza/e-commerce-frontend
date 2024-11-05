import { ProductType } from "@/types/products";

interface ProductTasteAndOriginProps {
    product: ProductType
};

const ProductTasteAndOrigin = (props: ProductTasteAndOriginProps) => {
    const { product } = props;

    return (
        <div className="flex items-center gap-3">
            <p className="px-2 py-1 text-orange-500 bg-white rounded-full shadow-md dark:shadow-sm dark:shadow-white">{product.taste}</p>
            <p className="px-2 py-1 text-orange-500 bg-white rounded-full shadow-md dark:shadow-sm dark:shadow-white">{product.origin}</p>
        </div>
    );
}

export default ProductTasteAndOrigin;