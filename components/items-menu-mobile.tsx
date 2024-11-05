import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

import Link from "next/link";

const ItemsMenuMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/coffee-grain" className="block">Coffee grain</Link>
                <Link href="/categories/ground-coffee" className="block">Ground Coffee</Link>
                <Link href="/categories/capsule-coffee" className="block">Capsule Coffee</Link>
            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;