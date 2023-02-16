import styles from "./scss/footer.module.scss"
import useMousePosition from "../../../components/hook/useMousePosition"
import { useEffect, useRef, useState } from "react"

import Roboto from "@next/font/local"
import Link from "next/link"
const  roboto = Roboto({ src : "../../../components/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf"})

type Position = {
    x: number,
    y: number
}

export const ScrollText = ({text = "docs@abc.osaka", mouse = false, animationDuration = 8000, width = 100}:{
    text?: string,
    mouse?: boolean,
    animationDuration?: number
    width?: number
}) => {
    return <div className={styles.__}>
        <div className={styles._} style={{width: `${width * 2}vw`}}>
            <Text text={text} width={width} mouse={mouse} animationDuration={animationDuration}/>
            <Text text={text} width={width} mouse={mouse} animationDuration={animationDuration}/>
        </div>
    </div>
}

export const Text = ({text = "docs@abc.osaka", mouse = false, animationDuration = 8000, width}:{
    text?: string,
    mouse?: boolean,
    animationDuration?: number
    width?: number
}) => {
    return <p className={styles.text} style={{animationDuration: `${animationDuration / 1000}s`, width: `${width}vw`, "--width": `-${width}vw`} as React.CSSProperties}>
        {text && text.split("").map((char: string, i: number) => mouse ? <Char key={i} char={char} /> : <span key={i}>{char}</span>)}
    </p>
}

export const Char = ({char}:{
    char: string
}) => {
    const mouse_ = useMousePosition()
    const mouse = useRef(mouse_)
    const ref = useRef<any>(null)
    const [weight, setWeight] = useState(400)
    const getDistance = (a: Position, b: Position): number => {
        return 1 / (Math.log2(Math.sqrt(Math.abs(a.x - b.x)**2 + Math.abs(a.y - b.y)**2)) + 10) * 8000
    }
    useEffect(()=> {
        mouse.current = mouse_
    },[mouse_])
    useEffect(() => {
        const times = setInterval(() => {
            if (!ref.current)
                return
            const position = {
                x: ref.current.getBoundingClientRect().x + 50,
                y: ref.current.getBoundingClientRect().y + 75
            }
            setWeight(getDistance(mouse.current, position))
        }, 10)
        return () => clearInterval(times)
    },[])
    return <span style={{fontWeight: Math.round(weight), fontFamily: roboto.style.fontFamily}} ref={ref}>{char}</span>
}

const Footer = ({
    links = [{
        href: "/",
        content: "プライバシーポリシー | Privacy Policy"
    },{
        href: "/",
        content: "お問い合わせフォーム | Contact Form"
    },{
        href: "/",
        content: "このサイトについて | About"
    }],
    texts = [{
        animationDuration: 6000,
        text: "abc.osaka"
    },{
        text: "docs@abc.osaka"
    }]
}:{
    links?: {
        href: string,
        content: any
    }[],
    texts?: {
        animationDuration?: number | undefined,
        text?: string | undefined,
        width?: number | undefined,
        mouse?: boolean | undefined,
    }[]
}) => {
    return <footer className={styles.footer}>
        { !!texts?.length && texts.map((text, i: number)=>
            <ScrollText key={i} animationDuration={text.animationDuration} width={text.width} mouse={text.mouse} text={text.text} />)}
        <p className={styles.t}>mailは基本返信できません、ご了承ください</p>
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", margin: "20px 0"}}>
            { !!links?.length && links.map((link, i: number)=> 
            <p key={i} className={styles.t} style={{opacity: 1, fontSize: 14, marginBottom: 0, marginTop: 0}}>
                <Link href={link.href}>{link.content}</Link>
            </p>)}
        </div>
    </footer>
}
export default Footer