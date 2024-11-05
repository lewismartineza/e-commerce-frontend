"use client";

import WishListItemProduct from "./components/wish-list-item-product";
import { useWishListProducts } from "@/hooks/use-wish-list";

export default function Page() {
    const { wishListItems } = useWishListProducts();


    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">
                Products you like
            </h1>

            <div>
                <div>
                    {wishListItems.length === 0 && (
                        <p >You have no products in your wish list</p>
                    )}
                    <ul>
                        {wishListItems.map((item) => (
                            <WishListItemProduct key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};