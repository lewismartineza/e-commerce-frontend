import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { ProductType } from "@/types/products"
import { toast } from "./use-toast";


interface CartStore {
    items: ProductType[]
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void
}

export const useCart =create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItems = currentItems.find((item) => item.id === data.id)

        if (existingItems) {
            return toast({
                title: "The product exists in the cart",
                variant: "destructive"
            })
        }

        set({
            items: [...get().items, data]
        })
        toast({
            title: "Product added to cart ",
        })
    },

    removeItem: (id: number) => {
        set({items: [...get().items.filter((item) => item.id !== id)]})
        toast({
            title: "Product delete to cart ",
        })
    },

    removeAll: () => set({items: []}),

}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))