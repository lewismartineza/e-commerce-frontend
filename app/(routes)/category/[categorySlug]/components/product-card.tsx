import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/products";

import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductTasteAndOrigin from "@/components/shared/product-taste-origin";

type ProductCartProps = {
    product: ProductType
}

const ProductCart = (props: ProductCartProps) => {
    const { product } = props
    const router = useRouter()


    return (
        <Link href={`/product/${product.slug}`} className="relative p-2 transition-all duration-100 rounded-xl hover:shadow-lg dark:shadow-white">
            <div className="absolute z-[1] top-4">
                <ProductTasteAndOrigin product={product}/>
            </div>
            <Carousel 
                opts={{
                    align: "start"
                }} className="w-full max-w-sm">
                <CarouselContent>
                    {product.images?.map((img) => (
                        <CarouselItem key={img.id} className="group">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                                alt="Image featured"
                                className="rounded-xl"
                            />
                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-start gap-x-3">
                                    <IconButton
                                    onClick={() => router.push(`/product/${product.slug}`)}
                                        icon={<Expand size={20} className="text-orange-600" />}
                                    />
                                    <IconButton
                                        onClick={() => console.log("product")}
                                        icon={<ShoppingCart size={20} className="text-orange-600" />}
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <p className="font-bold text-center mt-2">
                {formatPrice(product.price)}
            </p>

            <p className="text-2xl text-center">
                {product.productName}
            </p>

        </Link>
    );
}

export default ProductCart;