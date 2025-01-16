import { Textarea } from "@/components/ui/textarea"

type Props = {}

function ShadowTextArea({ }: Props) {
    return (
        <Textarea placeholder="Type your message here."
            className=" shadow-inside  bg-paper
          focus-visible:ring-offset-0"
        />
    )
}

export default ShadowTextArea