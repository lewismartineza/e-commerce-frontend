"use client"
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import Image from "next/image";

const PageSuccess = () => {
    const router = useRouter();

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image
                        src="/success.jpg"
                        alt="success"
                        width={250}
                        height={500}
                        className="rounded-lg"
                    />
                </div>
                <div>
                    <h1 className="text-3xl">Thank you for your purchase!</h1>
                    <p className="my-3">
                        Shortly, our team will get to work to select the freshest grains and prepare your shipment with care and dedication. In the meantime, sit back, relax and let the anticipation of the delicious aroma of freshly brewed coffee wash over you.
                    </p>
                    <p className="my-3">Thank you again for trusting us to satisfy your love for coffee. We can't wait for you to try our exquisite flavors!</p>
                    <p className="my-3">Enjoy your coffee!</p>

                    <Button onClick={() => router.push("/")}>Back to the store</Button>
                </div>
            </div>
        </div>
    );
};

export default PageSuccess;