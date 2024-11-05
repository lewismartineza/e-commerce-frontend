"use client"

import { useState } from "react"

import { ResponseType } from "@/types/response"
import { ProductType } from "@/types/products"

import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { useParams, useRouter } from "next/navigation"

import FiltersControlsCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/skeletonSchema"
import ProductCart from "./components/product-card"

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { results, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState("")
    const router = useRouter()

    const filteredProducts = results !== null && !loading && (
        filterOrigin === "" ? results.data : results.data.filter((product: ProductType) => product.origin === filterOrigin)
    )

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {results !== null && !loading && (
                <h1 className="text-xl font-medium">
                    Coffee {results.data[0].category.categoryName}
                </h1>
            )}
            <hr />
            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
                <div className="grid gap-3 mt-8 grid-cols-2 md:grid-cols-3 md:gap-2">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCart key={product.id} product={product} />
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                        <p>
                            The products you wanted to filter were not found.
                        </p>
                    )}
                </div>
            </div>

        </div>
    )
}