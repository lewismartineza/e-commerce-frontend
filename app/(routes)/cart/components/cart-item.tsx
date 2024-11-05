import { useCart } from "@/hooks/use-cart";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/products";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import ProductTasteAndOrigin from "@/components/shared/product-taste-origin";
import ImageProducts from "@/components/shared/image-products-miniature";

interface CartItemProps {
    product: ProductType;
}

const CartItem = (props: CartItemProps) => {
    const { product } = props;
    const { removeItem } = useCart();

    return (
        <li className="flex py-6 border-b">
            <ImageProducts product={product} />
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <div>
                        <h2 className="text-lg font-bold">
                            {product.productName}
                        </h2>
                        <p className="font-semibold">
                            {formatPrice(product.price)}
                        </p>
                    </div>
                    <ProductTasteAndOrigin product={product} />
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition dark:text-black dark:shadow-white")}>
                        <X size={20} onClick={() => removeItem(product.id)}/>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;