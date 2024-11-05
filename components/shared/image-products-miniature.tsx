import { ProductType } from "@/types/products";
import { useRouter } from "next/navigation";


interface ImageProductsProps {
    product: ProductType
};

const ImageProducts = (props: ImageProductsProps) => {
    const { product } = props;
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/product/${product.slug}`)}>
            {/* TO DO Add a Skeleton */}
            <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                alt="Image Product"
                className="w-32 h-full overflow-hidden rounded-xl"
            />
        </div>
    );
}

export default ImageProducts;