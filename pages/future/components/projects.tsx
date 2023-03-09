import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Img from "./img"
import a from "./scss/any.module.scss"

const projects = [
    {name: "abc.osaka", description: "ブログ", date: "2023 03", img: "/img/b.png", link: "https://abc.osaka/"},
    {name: "kanji puzzle", description: "漢字のパズルとか", date: "2023 03", img: "/img/a.png", link: "https://git.abc.osaka/kanji-puzzle/"},
    {name: "twitter clone", description: "twitterのclone", date: "2023 03", img: "/img/d.png", link: "https://github.com/applemango/twitter-clone"},
    {name: "image library", description: "画像を管理するやつ", date: "2023 03", img: "/img/c.png", link: "https://github.com/applemango/image_library"},
    {name: "Github", description: "github account", date: "2023 03", img: "/img/noimage.png", link: "https://github.com/applemango"},
    {name: "Scratch", description: "scratch account", date: "2023 03", img: "/img/noimage.png", link: "https://scratch.mit.edu/users/_applemango_"},
]

const generateRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    return chars[Math.floor(Math.random() * chars.length)];
}

const generateRandomString = (length: number) => {
    let result = ''
    for (let i = 0; i < length; i++) {
        result += generateRandomChar()
    }
    return result
}

const getClassName = (i: number ,name:string, base: string) => {
    return `${name}_${i}__${base}`
}

const getStyleBase = (i: number, base: string) => {
    //return `.container_0__${base}:has(.table_line_${i}__${base}:hover) .image_${i}__${base} {opacity: 1}`
    return `
        .container_0__${base} .table_line_${i}__${base}:hover p {background-color: #000 !important; color: #fff !important; width: fit-content;}
        .container_0__${base}:has(.table_line_${i}__${base}:hover) > .image_${i}__${base}{opacity: 1 !important; scale: 0.9 !important}
        .container_0__${base} .table_line_${i}__${base}:hover svg {transform: translateX(10px);background-color: #000!important; stroke: #fff!important; scale: 2}
        `
}
const getStyle = (length: number, base: string) => {
    let style = ``
    for (let i = 0; i < length; i++) {
        style = style.concat(getStyleBase(i, base))
    }
    console.log(style)
    return style
}

const Projects = () => {
    const [style, setStyle] = useState("")
    const randomClassName = "BGJ5g"//generateRandomString(5)
    useEffect(() => {
        setStyle(getStyle(projects.length, randomClassName))
    },[])
    return <div style={{
        borderBottom: "1px solid #eee",
        position: "relative",
        height: "fit-content",
        width: "100%",
    }} className={getClassName(0, "container", randomClassName)}>
        {projects.map((data, i) => <div key={i} style={{
            position: "absolute",
            width: "70%",
            maxWidth: 700,
            height: "100%",
            right: 0,
            opacity: 0,
            scale: 0.9
        }} className={getClassName(i, "image", randomClassName)}>
            <Img src={data.img} />
        </div>)}
        {projects.map((data, i) => <div key={i} style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #eee",
            padding: "4px 8px",
            alignItems: "center",
            position: "relative",
            zIndex: 2
        }} className={getClassName(i, "table_line", randomClassName)}>
            <div style={{width: "30%"}} className={a.w70max540}>
                <p style={{
                    fontSize: 20,
                    fontWeight: 300,
                    color: "#555",
                    lineHeight: 1,
                }}>{data.name}</p>
            </div>
            <div className={a.hide540} style={{width: "50%"}}>
                <p style={{
                    fontSize: 20,
                    fontWeight: 300,
                    color: "#555",
                    lineHeight: 1,
                }}>{data.description}</p>
            </div>
            <div style={{width: "20%"}} className={a.w30max540}>
                <p style={{
                    fontSize: 20,
                    fontWeight: 300,
                    color: "#555",
                    lineHeight: 1,
                }}>{data.date}</p>
            </div>
            <Link href={data.link}>
                <div style={{width: 16}}>
                    <svg style={{
                        transition: "transform .3s ease"
                    }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#555" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="13" y1="18" x2="19" y2="12" />
                        <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                </div>
            </Link>
        </div>)}
        <style>
            {style}
        </style>
    </div>
}
export default Projects;