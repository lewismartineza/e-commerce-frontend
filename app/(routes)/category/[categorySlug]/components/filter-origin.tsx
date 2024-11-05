import { useGetProductField } from "@/api/getProductField";

import { FilterType } from "@/types/filters";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { results, loading }: FilterType = useGetProductField()
    const { setFilterOrigin } = props


    return ( 
        <div className="my-5">
            <p className="mb-3 font-bold"> Origin</p>
                {loading && results === null && (
                    <p>Loading origin...</p>
                )}

                <RadioGroup onValueChange={(value) => setFilterOrigin(value)}  >
                    {results !== null && results.data.schema.attributes.origin.enum.map((origin: string) => (
                        <div key={origin} className="flex items-center space-x-2">
                            <RadioGroupItem value={origin} id={origin} />
                            <Label htmlFor={origin}>
                                {origin}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
        </div>
    );
}

export default FilterOrigin;