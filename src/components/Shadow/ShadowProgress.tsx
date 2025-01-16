import { Progress } from "../ui/progress"


type Props = { progress: number }

function ShadowProgress({ progress }: Props) {
    return (
        <Progress value={ progress } className="w-[400px] max-w-[50%] bg-paper shadow-pair" />
    )
}

export default ShadowProgress