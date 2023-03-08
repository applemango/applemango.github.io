import { motion, Variants } from "framer-motion"

import Roboto from "@next/font/local"
const  roboto = Roboto({ src : "../../../components/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf"})

export const TitleTextWithSimpleShowAnimation = ({text, style, animation, delay}:{
    text: string | any,
    style?: React.CSSProperties,
    animation?: Variants,
    delay?: number
}) => {
    const Animation: Variants = Object.assign({
        offscreen: {
            opacity: 0,
            y: 20
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                //bounce: 0.4,
                duration: 1.2,
                delay: delay
            }
        }
    }, animation)
    return <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{once: false, amount: 0, /*margin: "300px"*/}}>
    <motion.div
        variants={Animation}>
        <h1 style={Object.assign({
            fontFamily: roboto.style.fontFamily,
            fontSize: 256,
            color: "#252525"
        }, style)}>
            {text}
        </h1>
    </motion.div>
</motion.div>
}

const X  =() => {
    return <div />
}
export default X