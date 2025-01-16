import { Button } from "../ui/button"

type Props = {
    Text: string,
    className?: string,
    type?: 'DARK' | '' | 'CANCEL'
}

function ShadowButton({ Text, className, type }: Props) {
    return (
        // <div className="">

        <Button className={ `bg-paper text-black shadow-main w-fit min-w-[100px]
             active:bg-paper active:shadow-lite hover:bg-paper  
             ${type === 'DARK' ?
                'bg-gray-900 text-white hover:bg-gray-850  active:bg-gray-850'
                :
                ''}
    ${type === 'CANCEL' ?
                '  shadow-cancel  active:shadow-cancelLite'
                :
                ''}
                
               ${className}` }  >
            { Text }
        </Button>
        // </div>
    )
}

export default ShadowButton