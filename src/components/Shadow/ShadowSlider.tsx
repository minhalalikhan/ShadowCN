import { Slider } from "@/components/ui/slider"

type Props = {}

function ShadowSlider({ }: Props) {
    return (

        <Slider
            defaultValue={ [50] }
            max={ 100 }
            step={ 1 }
            className={ "w-[60%] border-none bg-paper slider" }// This can style the root slider if needed
        />

    )
}

export default ShadowSlider