import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProductProps {
    images: {
        id: number;
        url: string;
    }[]
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props
    
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {images?.map((img) => (
                        <CarouselItem key={img.id}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
                                alt="Image Product"
                                className="rounded-xl"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselProduct;