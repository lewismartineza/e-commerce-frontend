import { useWishListProducts } from "@/hooks/use-wish-list";
import { useCart } from "@/hooks/use-cart";

import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/products";

import { Heart } from "lucide-react";

export type ProductInformationProps = {
    product: ProductType
}

const ProductInformation = (props: ProductInformationProps) => {
    const { product } = props;
    const { addItem } = useCart();
    const { addProductToWishList } = useWishListProducts();

    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl">
                    {product.productName}
                </h1>
                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-xs rounded-xl text-orange-500 bg-white dark:bg-white w-fit shadow-xl dark:shadow-white dark:shadow-md">
                        {product.taste}
                    </p>
                    <p className="px-2 py-1 text-xs rounded-xl text-orange-500 bg-white dark:bg-white w-fit shadow-xl dark:shadow-white dark:shadow-md">
                        {product.origin}
                    </p>
                </div>
            </div>
            <hr className="mt-4" />
            <p>
                {product.description}
            </p>
            <hr className="my-4" />
            <p className="my-4 text-2xl">
                {formatPrice(product.price)}
            </p>
            <div className="flex items-center gap-5">
                <Button className="w-full rounded-xl" onClick={() => addItem(product)}>
                    Buy
                </Button>
                <Heart
                    width={30}
                    strokeWidth={1}
                    className="transition duration-300 cursor-pointer hover:fill-orange-500 dark:hover:fill-orange-500"
                    onClick={() => addProductToWishList(product)}
                />

            </div>
        </div>
    );
};

export default ProductInformation;