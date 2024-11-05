"use client"

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

import { useRouter } from "next/navigation";

import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id: 1,
        title: "Shipment in 24/48 h.",
        description: "As a VIP customer, your shipments in 24/48 hours. Get more information.",
        link: "#"
    },
    {
        id: 2,
        title: "Get up to -25% on purchases over $40 when you spend $150.",
        description: "-20% when you spend $150. Use guest code.",
        link: "#"
    },
    {
        id: 3,
        title: "Free returns and deliveries.",
        description: "As a customer, you get free shipping and returns in a shorter period of time.",
        link: "#"
    },
    {
        id: 4,
        title: "Buy new products.",
        description: "All new products at 50% discount.",
        link: "#"
    },
]

const CarouselTextBanner = () => {

    const router = useRouter()

    return ( 
        <div className="bg-gray-200 dark:bg-white">
            <Carousel className="w-full max-w-4xl mx-auto" plugins={[
                Autoplay({
                    delay: 2500,
                }),
            ]}>
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent border-x-0">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-black">{title}</p>
                                        <p className="sm:text-sm text-xs text-wrap dark:text-black">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
     );
}
 
export default CarouselTextBanner;