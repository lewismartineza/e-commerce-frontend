"use client"

import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";

import { useGetCategoies } from "@/api/getProducts";

import Link from "next/link";

const ChooseCategory = () => {
    const {results, loading}: ResponseType = useGetCategoies()

    return ( 
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Choose your favorite category</h3>

            <div className="grid gap-5 sm:grid-cols-3">
                {
                    !loading && results !== undefined && (
                        results.data.map((category: CategoryType) => {
                            const { id, categoryName, mainImage, slug} = category

                            return (
                                <Link
                                    key={category.id}
                                    href={`/category/${category.slug}`}
                                    className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                                >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${mainImage.url}`}
                                    alt={categoryName}
                                    className="max-w-[270px] transition duration-300 ease-in-out rounded-xl hover:scale-110"
                                    />
                                    <p className="absolute w-full py-2 text-lg font-bold text-center text-orange-500 bottom-5 backdrop-blur-lg">
                                        {categoryName}
                                    </p>
                                </Link>
                            )


                        })
                    )
                }
            </div>
        </div>
     );
}
 
export default ChooseCategory;