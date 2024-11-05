"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white dark:bg-black">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            LewDev
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Get to know our exciting world of coffee with our website specialized in the sale of high quality coffee beans, ground and in capsules.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="Shop">
                                Access all your information, your orders and much more.
                            </ListItem>
                            <ListItem href="/offers" title="Offers">
                                Section dedicated to promotions and special discounts.
                            </ListItem>
                            <ListItem href="/accessories" title="Accessories">
                                Complementary products such as cups, grinders, presses, etc.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Coffees</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-black">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/accessories" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Accessories
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Coffee beans",
        href: "/category/grain",
        description:
            "There are two main varieties of coffee beans: Arabica and Robusta. The best coffee beans are of the arabica variety, which is distinguished by its great richness in aromas and flavors. Originally from Ethiopia, it is the most cultivated in the world.",
    },
    {
        title: "Ground coffee",
        href: "/category/ground",
        description:
            "These are coffee beans that have been ground in a grinder to convert them into a fine powder1. The quality of the grind directly affects the flavor, aroma and body of the coffee2. The finest grade of grind is used to prepare espresso and other coffees with high pressure methods, while the medium-fine grind is used to prepare coffees with moderate pressure methods.",
    },
    {
        title: "Capsule coffee",
        href: "/category/capsule",
        description:
            "Coffee capsules are small individual units that contain just the right amount of ground coffee needed to prepare a cup. These capsules are compatible with coffee machines specially designed for their use, such as the popular Nespresso or Keurig.",
    },
]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

