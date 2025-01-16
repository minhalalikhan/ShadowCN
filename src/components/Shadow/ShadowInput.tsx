import { Input } from "@/components/ui/input"
import React from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {

    placeholder?: string
}

function ShadowInput({ placeholder, ...prop }: Props) {
    return (
        <Input type="text"
            placeholder={ placeholder }
            className="w-[250px] bg-paper  shadow-inside 
          focus-visible:ring-offset-0" { ...prop } />
    )
}

export default ShadowInput