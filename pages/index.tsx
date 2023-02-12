import { useState, useEffect, useRef } from "react"
import type { NextPage } from 'next'

import Heads from "../components/heads"
import Languages from "../components/languages"
import MiniRepo from "../components/minirepo"
import Histories from "../components/history"
import Graph from "../components/graph"

import styles from "../styles/index.module.scss"
import animations from "../components/styles/animations.module.scss"
import useWindowSize from "../components/hook/useWindowSize"
import { skillsGraphData } from "../lib/data"
import { ScrollText } from "../components/scrollText"

const Home: NextPage = () => {
    const [section, setSection] = useState(0)
    const [lang, setLang] = useState("ja")
    const [width, setWidth] = useState(600)
    const [height, setHeight] = useState(300)
    const padding = 24
    const [w,h] = useWindowSize() // for useEffect
    const ref = useRef<any>(null)
    const sections = [
        "README.md ->",
        "Pinned repositories ->",
        "Social accounts ->",
        "My programming history ->",
        "My skills ->"
    ]
    const getSectionsTransformPosition = (s: number) => {
        return (height + padding * 2) * Number(section != s)
    }
    const getSectionsScale = (s: number) => {
        return section == s ? 1 : 0.8
    }
    useEffect(() => {
        if(!ref)
            return
        setWidth(ref.current.offsetWidth)
        setHeight(ref.current.offsetHeight)
    })
    const Links = () => {
        return <div className={styles.twoLink} style={{marginBottom:12}}>
            { sections
            .filter((_section: string, i: number) => section != i)    
            .map((section: string, i: number) => <p key={i} className={styles.title_path}>
                <a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(sections.indexOf(section))}>{section}</a>
            </p>)}
        </div>
    }
    //"rotate(-45deg) skew(10deg, 10deg)"
    return <div className={ styles.flex } style={{overflow: "hidden"}}>
        <div style={{position: "absolute", transform: "rotate(-45deg) rotate3d(1, 1, 1, 45deg)",top: 350, right: -150, width: "120vw"}}>
            <ScrollText mouse width={160} text="Want to make something?" />
        </div>
        <Heads title={"AppleMango"} description={"AppleMango - Web系をやってるたまにブログを書く色々やりたいと思ってる人"} />
        <div className={ styles.main }>
            <div className={`${styles.main_} ${styles.section}`}>
                <div ref={ref} style={{transform: `translateY(-${height * section + (section != 0 ? padding * 2 : 0)}px) scale(${getSectionsScale(0)})`,transition:"all .3s ease"}}>
                    <div className={styles.main_text} style={{transform: `translateX(-${lang == "ja" ? 0 : width + padding}px)`,width:width * 2 + padding}}>
                        <div style={{width: width,overflow:"hidden",marginRight:padding}}>
                            <div className={styles.title_path} style={{display: 'flex',justifyContent:"space-between"}}>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} href="https://github.com/applemango">applemango</a> / README.md</p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setLang(lang == "ja" ? "en" : "ja")}>{lang == "ja" ? "English ->" : "<- Japanese"}</a></p>
                            </div>
                        </div>
                        <div style={{width: width,overflow:"hidden"}}>
                            <div className={styles.title_path} style={{display: 'flex',justifyContent:"space-between"}}>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} href="https://github.com/applemango">applemango</a> / README.md</p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setLang(lang == "ja" ? "en" : "ja")}>{lang == "ja" ? "English ->" : "<- Japanese"}</a></p>
                            </div>
                        </div>
                    </div>
                    <h1>Hello! I&apos;m AppleMango</h1>
                    <div className={styles.main_text} style={{transform: `translateX(-${lang == "ja" ? 0 : width + padding}px)`,width:width * 2 + padding}}>
                        <div style={{width: width,overflow:"hidden",marginRight:padding}}>
                            <p>色々, 最近はWEBをやってる、BLOGもたまに書く</p>
                            <p>稀にMLやDLをしている</p>
                        </div>
                        <div style={{width: width,overflow:"hidden"}}>
                            <p>Various, I'm doing web these days, and write BLOG occasionally</p>
                            <p>Rarely doing ML and DL</p>
                        </div>
                    </div>
                    <div className={styles.langs}>
                        <Languages
                            title={"Most Used Languages"}
                            className={styles.lang}
                            style={{
                                width: '100%'
                            }}
                            data={
                                {
                                    "Python":30
                                    ,"TypeScript":20
                                    ,"Rust":15
                                    ,"Go":10
                                    ,"SCSS":5
                                    ,"JavaScript":2.5
                                    ,"CSS":2.5
                                    ,"HTML":2.5
                                    ,"Other":12.5
                                }
                            }
                        />
                    </div>
                    <div className={styles.langs}>
                        <Languages
                            title={"Frontend Framework"}
                            link={false}
                            className={styles.lang}
                            style={{
                                width: '35%'
                                ,marginRight: 15
                                ,paddingTop: 0
                            }}
                            data={
                                {
                                    "Next.js":[90,"#3178c6"]
                                    ,"React":[5,"#3178c6"]
                                    ,"Other":5
                                }
                            }
                        />
                        <Languages
                            title={"Backend Framework"}
                            link={false}
                            className={styles.lang}
                            style={{
                                width: '65%'
                                ,paddingTop: 0
                            }}
                            data={
                                {
                                    "Flask":[40,"#3572a5"]
                                    ,"Actix":[30,"#dea584"]
                                    ,"Gin":[15,"#00add8"]
                                    ,"Other":15
                                }
                            }
                        />
                    </div>
                    <Links/>
                </div>
                <div className={styles.otherSection} style={{transform: `translateY(${getSectionsTransformPosition(1)}px) scale(${getSectionsScale(1)})`,width: width,height: height + padding}}>
                    <Links/>
                    <MiniRepo
                        title={"images_library"}
                        description={"Simple self-hosted image management web application"}
                        language={"TypeScript"}
                        className={styles.repo}
                    />
                    <MiniRepo
                        title={"twitter_clone"}
                        description={"twitter clone"}
                        language={"TypeScript"}
                        className={styles.repo}
                        style={{marginTop: 8}}
                    />
                    <p style={{marginTop: 12,display: "flex", justifyContent: "flex-end"}} className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} href={"https://github.com/applemango?tab=repositories"}>More repositories</a></p>
                </div>
                <div className={styles.otherSection} style={{transform: `translateY(${getSectionsTransformPosition(2)}px) scale(${getSectionsScale(2)})`,width: width,height: height + padding}}>
                    <Links/>
                    <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} href={"https://github.com/applemango"} >Github</a></p>
                    <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} href={"https://scratch.mit.edu/users/_applemango_"}>Scratch</a></p>
                </div>
                <div className={`${styles.otherSection} ${styles.overflow}`} style={{transform: `translateX(-${padding}px) translateY(${getSectionsTransformPosition(3)}px) scale(${getSectionsScale(3)})`,width: width + padding * 2,height: height + padding * 3,overflow: section == 3 ? "auto" : "hidden"}}>
                    <Links/>
                    <Histories>
                        <Histories.History name={"Scratch"} date={"October 2021 - June 2022"}>
                            <Histories.MiniInfo name={"Created scratch accounts"} date={"23 oct 2021"}/>
                            <Histories.Repo url={"https://turbowarp.org/588589394"} name={"_applemango_ / OS 100% pen"} lang={"Scratch"} date={"23 Oct 2021"} />
                            <Histories.Repo url={"https://turbowarp.org/592866752"} name={"_applemango_ / [100%pen]Animation Creation"} lang={"Scratch"} date={"31 Oct 2021"} />
                            <Histories.Repo url={"https://turbowarp.org/651175953"} name={"_applemango_ / ui demo 1"} lang={"Scratch"} date={"27 Feb 2022"} />
                            <Histories.Repo url={"https://turbowarp.org/694611718"} name={"_applemango_ / python v0"} lang={"Scratch"} date={"22 May 2022"} />
                            <Histories.Repo url={"https://turbowarp.org/701195829"} name={"_applemango_ / gui"} lang={"Scratch"} date={"5 Jun 2022"} />
                            <Histories.Repo url={"https://turbowarp.org/707785303"} name={"_applemango_ / chess v0"} lang={"Scratch"} date={"21 Jun 2022"} />
                        </Histories.History>
                        <Histories.History name={"Web development"} date={"July 2022 - now"}>
                            <Histories.Repo url={"https://github.com/applemango/social"} name={"applemango / social"} lang={"TypeScript"} date={"3 Aug 2022"} />
                            <Histories.Repo url={"https://github.com/applemango/place"} name={"applemango / place"} lang={"TypeScript"} date={"20 Aug 2022"} />
                            <Histories.Repo url={"https://github.com/applemango/images_library"} name={"applemango / images_library"} lang={"TypeScript"} date={"17 Sep 2022"} />
                            <Histories.Repo url={"https://github.com/applemango/chat"} name={"applemango / chat"} lang={"TypeScript"} date={"24 Oct 2022"} />
                        </Histories.History>
                    </Histories>
                </div>
                <div className={styles.otherSection} style={{transform: `translateY(${getSectionsTransformPosition(4)}px) scale(${getSectionsScale(4)})`,width: width,height: height + padding}}>
                    <Links/>
                    <div style={{transform: `translateX(${-4}px) translateY(10px)`}}>
                        <Graph
                            width={width - 36}
                            height={height - (padding * 2)}
                            rows={["Oct. 2021","Dec. 2021","Feb 2022","Apr. 2022","Jun. 2022","Aug. 2022","Oct. 2022", "Dec. 2022"]}
                            cols={["very low","low","normal","medium","high","very high"]}
                            labelX={"Start"}
                            labelY={"Use"}
                            data={skillsGraphData}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home
