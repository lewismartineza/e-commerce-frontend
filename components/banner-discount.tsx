import { buttonVariants } from "./ui/button";
import Link from "next/link";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2x1 text-primary">get up to -25% off</h2>
            <h3 className="mt-3 font-semibold">20% when you spend more than $100 or -25% when you spend $150. use LewDev code</h3>

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()} >Buy</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})} >More information</Link>
            </div>
        </div>
     );
}

export default BannerDiscount;