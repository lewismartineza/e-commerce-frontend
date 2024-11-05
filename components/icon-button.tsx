import { cn } from "@/lib/utils";

interface IconButtonProps {
    onClick: () => void,
    icon: React.ReactElement
    className?: string
}

const IconButton = (props: IconButtonProps) => {
    const{ onClick, icon, className } = props

    return ( 
        <button onClick={onClick} className={cn("rounded-full flex items-center bg-white border p-2 drop-shadow-lg hover:text-orange-500 transition", className)}>
            {icon}
        </button>
     );
}
 
export default IconButton;