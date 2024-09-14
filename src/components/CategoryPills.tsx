import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./Button"
import { useEffect, useRef, useState } from "react";

type CategoryPills = {
    categories: string[],
    selectCategory: string,
    onSelect: (category: string) => void
}

const TRANSLATE_AMOUNT = 100
export const CategoryPills = ({ categories, selectCategory, onSelect }: CategoryPills) => {

    const ref = useRef<HTMLDivElement>(null)
    const [isleftVisible, setLeftVisible] = useState(true)
    const [isRightVisible, setRightVisible] = useState(true)
    const [translate, setTranslate] = useState(0)

    useEffect(()=>{

        if(ref.current === null) return ;

        const observer = new ResizeObserver(entities=>{
            console.log(entities)
            const container = entities[0].target 
            if(container === null) return 
            setLeftVisible(translate>0)
            setRightVisible(translate+container.clientWidth < container.scrollWidth)
        })

        observer.observe(ref.current)

        return ()=>{
            observer.disconnect()
        }

    } , [translate , categories ])

    return <div className="overflow-x-hidden relative" ref={ref}>
        <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content] ml-12 md:ml-10" style={{ transform: `translateX(-${translate}px)` }} >
            {categories.map(item => <Button className="px-2 py-1" variant={`${item === selectCategory ? "dark" : "default"}`} onClick={() => onSelect(item)}>{item}</Button>)}
        </div>
        {isleftVisible && <div className="absolute top-1/2 left-0 -translate-y-4     bg-gradient-to-r from-white from-50% to-transparent w-24 h-full ">
            <Button variant="ghost" size="icon" className="h-full aspect-square" onClick={() => {
                setTranslate(translate => {
                    const newTranslate = translate - TRANSLATE_AMOUNT
                    if (translate <= 0) {
                        return 0
                    }
                    return newTranslate
                })
            }}><MdOutlineKeyboardArrowLeft /></Button>
        </div>}
        {isRightVisible && <div className="absolute top-1/2 -right-4 -translate-y-4 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full ">
            <Button variant="ghost" size="icon" className="h-full  aspect-square" onClick={() => {
                setTranslate(translate => {
                    if (ref.current === null) return translate
                    const newTranslate = translate + TRANSLATE_AMOUNT
                    const edge = ref.current?.scrollWidth
                    const width = ref.current?.clientWidth
                    if (newTranslate + width >= edge) {
                        return edge - width
                    }
                    return newTranslate
                })
            }}  ><MdKeyboardArrowRight /></Button>
        </div>}
    </div>
}