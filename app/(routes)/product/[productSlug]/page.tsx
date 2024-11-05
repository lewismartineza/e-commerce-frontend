"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug"
import { ResponseType } from "@/types/response"

import { useParams } from "next/navigation"

import ProductInformation from "./components/product-information"
import SkeletonProduct from "./components/skeleton-product"
import CarouselProduct from "./components/carousel-product"

export default function Page() {
    const params = useParams()
    const { productSlug } = params
    const { results, loading }: ResponseType = useGetProductBySlug(productSlug)

    if(results === null){
        return <SkeletonProduct />
    }

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div className="mx-4">
                    <CarouselProduct images={results.data[0].images} />
                </div>

                <div className="sm:px-7">
                    <ProductInformation product={results.data[0]} />
                </div>
            </div>
        </div>
    )
}