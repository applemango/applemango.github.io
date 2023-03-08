import { useEffect, useRef, useState } from "react";
import useScrollPosition from "../../../components/hook/useScrollPosition";
import useWindowSize from "../../../components/hook/useWindowSize";

type element = React.ReactComponentElement<any>
type elements = Array<element>

const ScrollHorizontal = ({children}:{
    children: element | elements
}) => {
    const scrollPosition = useScrollPosition();
    const [elementWidth, setElementWidth] = useState(0)
    const [elementTop, setElementTop] = useState(0)
    const [horizontal, setHorizontal] = useState(false)
    const [elementTransformX, setElementTransformX] = useState(0)
    const [end, setEnd] = useState(false)
    const [elementEndPositionY, setElementEndPositionY] = useState(0)
    const [elementEndPositionX, setElementEndPositionX] = useState(0)
    const windowSize = useWindowSize();
    const ref = useRef<any>(null)
    /*useEffect(() => {
        if(!process.browser)
            return
        window.scrollTo({
            top: 0
        })
    }, [windowSize])*/
    useEffect(()=> {
        if(!ref?.current)
            return
        const h = window.innerHeight
        const w = window.innerWidth
        const x = w - h
        setElementWidth(ref.current.offsetWidth)
        setElementTop(ref.current.getBoundingClientRect().top)
    },[ref, windowSize])
    useEffect(()=> {
        const h = window.innerHeight
        const w = window.innerWidth
        const x = w - h
        setHorizontal(false)
        setEnd(false)
        if(elementTop > scrollPosition)
            return
        
        if(elementTop + elementWidth < scrollPosition + h + x)
            return setEnd(true)

        const pnr = elementTop + elementWidth - scrollPosition
        setHorizontal(true)

        setElementTransformX(elementWidth - pnr)
    },[scrollPosition, elementWidth, elementTop, windowSize])
    useEffect(()=> {
        if(!ref?.current)
            return
        const h = window.innerHeight
        const w = window.innerWidth
        const x = w - h
        setElementEndPositionY(elementWidth - window.innerHeight - x)
        setElementEndPositionX(elementWidth - window.innerWidth)
    },[elementWidth, elementTop, windowSize])
    return <div ref={ref} style={{
        height: process.browser ? elementWidth - (window.innerWidth - window.innerHeight) : elementWidth,
        width: "fit-content",
    }}>
        <div style={Object.assign({
            width: "fit-content",
            height: "fit-content",
            willChange: "transform",
        }, (horizontal &&  !end) && {
            position: "fixed",
            top: 0,
            transform: `translateX(-${elementTransformX}px)`
        }, end && {
            transform: `translateX(-${elementEndPositionX}px) translateY(${elementEndPositionY}px)`
        }) as any}>
            {children}
        </div>
    </div>
}
export default ScrollHorizontal;