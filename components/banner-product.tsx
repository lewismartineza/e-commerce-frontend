import { buttonVariants } from "./ui/button";
import Link from "next/link";

const BannerProduct = () => {
    return ( 
        <>
            <div className="mt-4 text-center ">
                <p>Immerse yourself in a unique experience</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">Exquisite coffee</h4>
                <p className="my-2 text-lg">Awaken your senses with every sip</p>
                <Link href="#" className={buttonVariants()}>Buy</Link>
            </div>
            <div className="h=[350px] bg-cover md:h-[900px] bg-[url('/slider-image-5.jpg')] bg-center mt-5" />
        </>
     );
}
 
export default BannerProduct;