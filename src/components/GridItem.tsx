import { GridItemType } from "@/types/GridItensTypes"
import Image from "next/image"
import b7Svg from '../svgs/b7.svg'
import fundo from '../fotos/fundo.jpg'
import { Items } from "@/data/items"
import clsx from "clsx"


type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
    return (
        <div onClick={onClick} className={clsx(' cursor-pointer transition',
                (item.permanentShown || item.shown) ? 'bg-blue-500' : 'bg-gray-200'
                )}>
            {item.permanentShown === false && item.shown === false && <Image className="opacity-20" src={fundo} alt=""/>}

            {(item.permanentShown || item.shown && item.item !== null && <Image src={
                Items[item.item].icon} alt="" />)}
        </div>
    )
}