import { Checkbox } from "@/components/ui/checkbox"
type Props = {}

function ShadowCheckbox({ }: Props) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" className=" shadow-check data-[state=checked]:shadow-checked" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Accept terms and conditions
            </label>
        </div>
    )
}

export default ShadowCheckbox