"use client";

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import MenuList from "./menu-list";
import { useWishListProducts } from "@/hooks/use-wish-list";

const Navbar = () => {
    const router = useRouter();
    const cart = useCart();
    const { wishListItems } = useWishListProducts();

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>Lew
                <span className="font-bold">Dev</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">

                {cart.items.length === 0 ?
                    <ShoppingCart
                        strokeWidth="1"
                        className="cursor-pointer"
                        onClick={() => router.push("/cart")}
                    />
                    : (
                        <div className="flex gap-1" onClick={() => router.push("/cart")}>
                            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                            <span className="text-orange-500">{cart.items.length}</span>
                        </div>
                )}

                <Heart
                    strokeWidth="1"
                    className={`cursor-pointer  ${wishListItems.length > 0 && 'fill-orange-500'}`}
                    onClick={() => router.push("/wish-list")}
                />

                <User
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/loved-products")}
                />

                <ToggleTheme />
            </div>
        </div>
    );
};

export default Navbar;