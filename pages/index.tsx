import { useState, useEffect, useRef } from "react"
import type { NextPage } from 'next'

import Heads from "./components/heads"
import Languages from "./components/languages"
import MiniRepo from "./components/minirepo"

import styles from "./styles/index.module.scss"
import animations from "./components/styles/animations.module.scss"
import useWindowSize from "../lib/hook/useWindowSize"
import { InfoIcon, RepoIcon } from "@primer/octicons-react"
import { getColor } from "../lib/languagesColor"
import History from "./components/history"
import Histories from "./components/history"
import Graph from "./components/graph"

const Home: NextPage = () => {
    const [section, setSection] = useState(0)
    const [lang, setLang] = useState("ja")
    const [width, setWidth] = useState(600)
    const [height, setHeight] = useState(300)
    const padding = 24
    const [w,h] = useWindowSize() // for useEffect
    const ref = useRef<any>(null)
    const getSectionsTransformPosition = (s: number) => {
        return (height + padding * 2) - (height * Number(section == s) + (Number(section == s) * padding * 2))
    }
    const getSectionsScale = (s: number) => {
        return section == s ? 1 : 1
    }
    useEffect(() => {
        if(ref) {
            setWidth(ref.current.offsetWidth)
            setHeight(ref.current.offsetHeight)
        }
    })
    const Links = () => {
        return <div className={styles.twoLink} style={{marginBottom:12}}>
            { section != 0 && <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(0)}>README.md -&gt;</a></p>}
            { section != 1 && <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(1)}>Pinned repositories -&gt;</a></p>}
            { section != 2 && <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(2)}>Social accounts -&gt;</a></p>}
            { section != 3 && <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(3)}>My programming history -&gt;</a></p>}
            { section != 4 && <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(4)}>My skills -&gt;</a></p>}
        </div>
    }
    return (//分割すべき(section)だけどめんどい
        <div className={ styles.flex }>
            <Heads title={"AppleMango"} description={"AppleMango - 主にNext.jsやFlaskを使う色々やりたいと思ってる人"} />
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
                                <p>色々, 最近は主にNext.jsやFlaskを使ってWeb Appを作っています</p>
                                <p>稀にMLやDLをしている</p>
                            </div>
                            <div style={{width: width,overflow:"hidden"}}>
                                <p>Various, lately I mainly use Next.js and Flask to create Web Apps!</p>
                                <p>Rarely ML or DL.</p>
                            </div>
                        </div>
                        <div className={styles.langs}>
                            <Languages
                                title={"Most Used Languages"}
                                className={styles.lang}
                                style={{
                                    width: '60%'
                                    ,marginRight: 15
                                }}
                                data={
                                    {
                                        "TypeScript":25
                                        ,"Python":20
                                        ,"JavaScript":15
                                        ,"SCSS":15
                                        ,"CSS":5
                                        ,"Other":20
                                    }
                                }
                            />
                            <Languages
                                title={"Most Used Framework"}
                                link={false}
                                className={styles.lang}
                                style={{
                                    width: '40%'
                                }}
                                data={
                                    {
                                        "Next.js":[70,"#2c3e50"]
                                        ,"Flask":[15,"#3572A5"]
                                        ,"React":[5,"#3178c6"]
                                        ,"Other":10
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
                            title={"place"}
                            description={"Simple online pixel art editor"}
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
                            </Histories.History>
                        </Histories>
                    </div>
                    <div className={styles.otherSection} style={{transform: `translateY(${getSectionsTransformPosition(4)}px) scale(${getSectionsScale(4)})`,width: width,height: height + padding}}>
                        <Links/>
                        <div style={{transform: `translateX(${-4}px) translateY(10px)`}}>
                            <Graph
                                width={width - 36}
                                height={height - (padding * 2)}
                                rows={["Oct. 2021","Dec. 2021","Feb 2022","April 2022","June 2022","Aug 2022","Oct. 2022"]}
                                cols={["very low","low","normal","medium","high","very high"]}
                                labelX={"Start"}
                                labelY={"Use"}
                                data={[
                                    {
                                        x:0.25
                                        ,y:1
                                        ,labelX:"Jan 2022"
                                        ,labelY:"very high"
                                        ,name:"Python"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.09
                                        ,y:0.6
                                        ,labelX:"23 oct 2021"
                                        ,labelY:"medium"
                                        ,name:"Scratch"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.43
                                        ,y:0.44
                                        ,labelX:"Mar 2022"
                                        ,labelY:"normal"
                                        ,name:"JavaScript"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.75
                                        ,y:1
                                        ,labelX:"Jul 2022"
                                        ,labelY:"very high"
                                        ,name:"TypeScript"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.35
                                        ,y:0.2
                                        ,labelX:"Feb 2022"
                                        ,labelY:"low"
                                        ,name:"HTML"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.38
                                        ,y:0.35
                                        ,labelX:"Feb 2022"
                                        ,labelY:"low"
                                        ,name:"CSS"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.8
                                        ,y:0.8
                                        ,labelX:"July 2022"
                                        ,labelY:"high"
                                        ,name:"Sass"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.67
                                        ,y:0.15
                                        ,labelX:"June 2022"
                                        ,labelY:"low"
                                        ,name:"c"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.69
                                        ,y:0.2
                                        ,labelX:"June 2022"
                                        ,labelY:"low"
                                        ,name:"go"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.72
                                        ,y:0.3
                                        ,labelX:"June 2022"
                                        ,labelY:"low"
                                        ,name:"rust"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.56
                                        ,y:0.56
                                        ,labelX:"Apr 2022"
                                        ,labelY:"normal"
                                        ,name:"ruby"
                                        ,color:"#f1c40f"
                                    }
                                    ,{
                                        x:0.75
                                        ,y:0.59
                                        ,labelX:"Jul 2022"
                                        ,labelY:"normal"
                                        ,name:"react"
                                        ,color:"#fd79a8"
                                    }
                                    ,{
                                        x:0.78
                                        ,y:0.9
                                        ,labelX:"Jul 2022"
                                        ,labelY:"normal"
                                        ,name:"next.js"
                                        ,color:"#8e44ad"
                                    }
                                    ,{
                                        x:0.66
                                        ,y:0.92
                                        ,labelX:"Jul 2022"
                                        ,labelY:"very high"
                                        ,name:"Flask"
                                        ,color:"#8e44ad"
                                    }
                                    ,{
                                        x:0.84
                                        ,y:0.12
                                        ,labelX:"Aug 2022"
                                        ,labelY:"very low"
                                        ,name:"Express"
                                        ,color:"#8e44ad"
                                    }
                                    ,{
                                        x:0.86
                                        ,y:0.18
                                        ,labelX:"Aug 2022"
                                        ,labelY:"very low"
                                        ,name:"Nest"
                                        ,color:"#8e44ad"
                                    }
                                    ,{
                                        x:0.63
                                        ,y:0.4
                                        ,labelX:"May 2022"
                                        ,labelY:"low"
                                        ,name:"Ruby on rails"
                                        ,color:"#8e44ad"
                                    }
                                    ,{
                                        x:0.56
                                        ,y:0.25
                                        ,labelX:"May 2022"
                                        ,labelY:"low"
                                        ,name:"Django"
                                        ,color:"#8e44ad"
                                    }
                                    ,{
                                        x:0.86
                                        ,y:0.6
                                        ,labelX:"Aug 2022"
                                        ,labelY:"normal"
                                        ,name:"ML"
                                        ,color:"#1abc9c"
                                    }
                                    ,{
                                        x:0.95
                                        ,y:0.5
                                        ,labelX:"Sep 2022"
                                        ,labelY:"normal"
                                        ,name:"DL"
                                        ,color:"#1abc9c"
                                    }
                                    ,{
                                        x:0.5
                                        ,y:0.12
                                        ,labelX:"Apr 2022"
                                        ,labelY:"very low"
                                        ,name:"unity"
                                        ,color:"#3498db"
                                    }
                                    ,{
                                        x:0.46
                                        ,y:0.19
                                        ,labelX:"Apr 2022"
                                        ,labelY:"very low"
                                        ,name:"unreal engine"
                                        ,color:"#3498db"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
