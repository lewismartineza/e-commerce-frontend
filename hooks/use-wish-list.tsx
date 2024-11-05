import { ProductType } from "@/types/products";

import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

import { toast } from "./use-toast";

interface UseWishListType {
    wishListItems: ProductType[];
    addProductToWishList: (data: ProductType) => void;
    removeProductToWishList: (id: number) => void;
}

export const useWishListProducts = create(persist<UseWishListType>((set, get) => ({
    wishListItems: [],
    addProductToWishList: (data: ProductType) => {
        const currentWishListItems = get().wishListItems
        const existingCurrentWishListItem = currentWishListItems.find((item) => item.id === data.id)

        if (existingCurrentWishListItem) {
            return toast({
                title: "The product exists in the wish list",
                variant: "destructive"
            })
        }

        set({
            wishListItems: [...get().wishListItems, data]
        })
        toast({
            title: "Product added to wish list",
        })
    },

    removeProductToWishList: (id: number) => {
        set({ wishListItems: [...get().wishListItems.filter((item) => item.id !== id)] })
        toast({
            title: "Product delete to wish list",
        })
    },

}), {
    name: "wish-list-storage",
    storage: createJSONStorage(() => localStorage)
}))