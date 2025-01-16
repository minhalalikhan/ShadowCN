
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import ShadowInput from "./ShadowInput"
import ShadowButton from "./ShadowButton"



type Props = {}

function ShadowCard({ }: Props) {
    return (
        <Card className="w-[350px] bg-paper shadow-none !shadow-main ">
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            {/* <Input id="name" placeholder="Name of your project" /> */ }
                            <ShadowInput id={ "name" } placeholder={ "Name of your project" } />

                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Framework</Label>

                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">

                <ShadowButton Text="cancel" type="CANCEL" />
                <ShadowButton Text="Deploy" type="DARK" />
            </CardFooter>
        </Card>
    )
}

export default ShadowCard