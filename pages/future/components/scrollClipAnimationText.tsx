import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import useScrollPosition from "../../../components/hook/useScrollPosition"

import Roboto from "@next/font/local"
const  roboto = Roboto({ src : "../../../components/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf"})

const ScrollClipAnimationText = ({text, length = 200, startHeight = 1.8, start = 100, style}:{
    text: string,
    length?: number,
    startHeight?: number,
    start?: number,
    style?: React.CSSProperties
}) => {
    const scrollPosition = useScrollPosition()
    const [refPosition, setRefPosition] = useState(0)
    const ref = useRef<any>(null)
    const getWidth = () => {
        if(!process.browser || !window)
            return 0
        const s = scrollPosition
        const r = refPosition
        const w = window.innerHeight
        const l = length
        const st = start
        const sh = startHeight

        const f = (s - st - r + (w / sh)) / l

        return f < 0
                ? 0
                : f > 1
                    ? 1
                    : f
    }
    useEffect(()=> {
        if(!ref.current)
            return
        setRefPosition(ref.current.offsetTop)
    })
    return <div ref={ref} style={{
        position: "relative",
        width: "fit-content"
    }}>
        <p style={Object.assign({
            color: "#222",
            fontSize: 32,
            backgroundClip: "text",
            position: "relative",
            width: "fit-content",
            margin: 0,
            fontFamily: roboto.style.fontFamily
        }, style)}>{text}</p>
        <motion.div style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            backgroundColor: "#fff",
            opacity: .9,
            zIndex: 2,
            backgroundAttachment: "scroll",
            maxWidth: "100%"
        }} animate={{
            width: `${(1 - getWidth()) * 100}%`,
        }} transition={{
            type: "tween"
        }}/>
    </div>
}
export default ScrollClipAnimationText