import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

type Props = {}

function ShadowSwitch({ }: Props) {
    return (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode"
                className="!bg-paper shadow-pair 
             data-[state=checked]:shadow-main  data-[state=checked]:!bg-black" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    )
}

export default ShadowSwitch