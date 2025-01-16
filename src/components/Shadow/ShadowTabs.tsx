import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
type Props = {}

function ShadowTabs({ }: Props) {
    return (
        <Tabs defaultValue="account" className="w-[400px] bg-paper">
            <TabsList className="grid w-full grid-cols-2
             bg-paper shadow-inside
             h-fit overflow-hidden gap-[10px] p-[12px]
             ">
                <TabsTrigger value="account"
                    className=" !bg-paper shadow-main data-[state=active]:!shadow-none "

                >Account</TabsTrigger>
                <TabsTrigger value="password"
                    className=" !bg-paper  shadow-main data-[state=active]:!shadow-none "
                >Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">

            </TabsContent>
            <TabsContent value="password">

            </TabsContent>
        </Tabs>
    )
}

export default ShadowTabs