import { useState, useEffect, useRef } from "react"
import type { NextPage } from 'next'

import Heads from "./components/heads"
import Languages from "./components/languages"
import MiniRepo from "./components/minirepo"

import styles from "./styles/index.module.scss"
import animations from "./components/styles/animations.module.scss"
import useWindowSize from "../lib/hook/useWindowSize"
import { RepoIcon } from "@primer/octicons-react"
import { getColor } from "../lib/languagesColor"

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
    return (//分割すべき(section)だけどめんどい
        <div className={ styles.flex }>
            <Heads title={"AppleMango"} description={"AppleMango - 主にNext.jsやFlaskを使う色々やりたいと思ってる人"} />
            <div className={ styles.main }>
                <div className={`${styles.main_} ${styles.section}`}>
                    <div ref={ref} style={{transform: `translateY(-${height * section + (section != 0 ? padding * 2 : 0)}px) scale(${getSectionsScale(0)})`,transition:"all .3s ease"}}>
                        <div className={styles.title_path} style={{display: 'flex',justifyContent:"space-between"}}>
                            <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} href="https://github.com/applemango">applemango</a> / README.md</p>
                            <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setLang(lang == "ja" ? "en" : "ja")}>{lang == "ja" ? "English ->" : "<- Japanese"}</a></p>
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
                        <div className={styles.twoLink}>
                            <div>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(1)}>Pinned repositories -&gt;</a></p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(2)}>Social accounts -&gt;</a></p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(3)}>My programming history -&gt;</a></p>
                            </div>
                            <div>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(1)}>github</a></p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(2)}>scratch</a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.otherSection} style={{transform: `translateY(${getSectionsTransformPosition(1)}px) scale(${getSectionsScale(1)})`,width: width,height: height + padding}}>
                        <div>
                            <div className={styles.twoLink}>
                                <p style={{marginBottom: 8}} className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(0)}>README.md -&gt;</a></p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(2)}>Social accounts -&gt;</a></p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(3)}>My programming history -&gt;</a></p>
                            </div>
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
                    </div>
                    <div className={styles.otherSection} style={{transform: `translateY(${getSectionsTransformPosition(2)}px) scale(${getSectionsScale(2)})`,width: width,height: height + padding}}>
                        <div>
                            <div className={styles.twoLink}>
                                <p style={{marginBottom: 12}} className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(0)}>README.md -&gt;</a></p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(1)}>Pinned repositories -&gt;</a></p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(3)}>My programming history -&gt;</a></p>
                            </div>
                            <p style={{marginBottom: 12}} className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} href={"https://github.com/applemango"} >Github</a></p>
                            <p style={{marginBottom: 12}} className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} href={"https://scratch.mit.edu/users/_applemango_"}>Scratch</a></p>
                        </div>
                    </div>
                    <div className={styles.otherSection} style={{transform: `translateY(${getSectionsTransformPosition(3)}px) scale(${getSectionsScale(3)})`,width: width,height: height + padding}}>
                        <div>
                            <div className={styles.twoLink}>
                                <p style={{marginBottom: 12}} className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(0)}>README.md -&gt;</a></p>
                                <p style={{marginBottom: 12}} className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(1)}>Pinned repositories -&gt;</a></p>
                                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} style={{cursor:"pointer"}} onClick={() => setSection(2)}>Social accounts -&gt;</a></p>
                            </div>
                            <div className={styles.histories}>
                            <div className={styles.history}>
                                    <div className={styles.history_icon}><RepoIcon size={16} /></div>
                                    <div className={styles.history_main}>
                                        <div className={styles.history_info}>
                                            <p>Scratch</p><p>October 2021 - June 2022</p>
                                        </div>
                                        <p>Created scratch accounts</p>
                                        <div className={styles.history_repo}>
                                            <div className={styles.history_repo_title}>
                                                <p className={styles.history_repo_url}><a href="https://turbowarp.org/588589394">_applemango_ / OS 100% pen</a></p>
                                            </div>
                                            <div className={styles.history_repo_info}>
                                                <div className={styles.history_repo_info_lang}>
                                                    <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor("Scratch")}}></div>
                                                    <p>Scratch</p>
                                                </div>
                                                <p className={styles.history_repo_info_date}>23 Oct 2021</p>
                                            </div>
                                        </div>
                                        <div className={styles.history_repo}>
                                            <div className={styles.history_repo_title}>
                                                <p className={styles.history_repo_url}><a href="https://turbowarp.org/592866752">_applemango_ / {"[100%pen]Animation Creation"}</a></p>
                                            </div>
                                            <div className={styles.history_repo_info}>
                                                <div className={styles.history_repo_info_lang}>
                                                    <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor("Scratch")}}></div>
                                                    <p>Scratch</p>
                                                </div>
                                                <p className={styles.history_repo_info_date}>31 Oct 2021</p>
                                            </div>
                                        </div>
                                        <div className={styles.history_repo}>
                                            <div className={styles.history_repo_title}>
                                                <p className={styles.history_repo_url}><a href="https://turbowarp.org/651175953">_applemango_ / ui demo 1</a></p>
                                            </div>
                                            <div className={styles.history_repo_info}>
                                                <div className={styles.history_repo_info_lang}>
                                                    <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor("Scratch")}}></div>
                                                    <p>Scratch</p>
                                                </div>
                                                <p className={styles.history_repo_info_date}>27 Feb 2022</p>
                                            </div>
                                        </div>
                                        <div className={styles.history_repo}>
                                            <div className={styles.history_repo_title}>
                                                <p className={styles.history_repo_url}><a href="https://turbowarp.org/694611718">_applemango_ / python v0</a></p>
                                            </div>
                                            <div className={styles.history_repo_info}>
                                                <div className={styles.history_repo_info_lang}>
                                                    <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor("Scratch")}}></div>
                                                    <p>Scratch</p>
                                                </div>
                                                <p className={styles.history_repo_info_date}>22 May 2022</p>
                                            </div>
                                        </div>
                                        <div className={styles.history_repo}>
                                            <div className={styles.history_repo_title}>
                                                <p className={styles.history_repo_url}><a href="https://turbowarp.org/701195829">_applemango_ / gui</a></p>
                                            </div>
                                            <div className={styles.history_repo_info}>
                                                <div className={styles.history_repo_info_lang}>
                                                    <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor("Scratch")}}></div>
                                                    <p>Scratch</p>
                                                </div>
                                                <p className={styles.history_repo_info_date}>5 Jun 2022</p>
                                            </div>
                                        </div>
                                        <div className={styles.history_repo}>
                                            <div className={styles.history_repo_title}>
                                                <p className={styles.history_repo_url}><a href="https://turbowarp.org/707785303">_applemango_ / chess v0</a></p>
                                            </div>
                                            <div className={styles.history_repo_info}>
                                                <div className={styles.history_repo_info_lang}>
                                                    <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor("Scratch")}}></div>
                                                    <p>Scratch</p>
                                                </div>
                                                <p className={styles.history_repo_info_date}>21 Jun 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.history}>
                                    <div className={styles.history_icon}><RepoIcon size={16} /></div>
                                    <div className={styles.history_main}>
                                        <div className={styles.history_info}>
                                            <p>Web development</p><p>July 2022 - now</p>
                                        </div>
                                        <div className={styles.history_repo}>
                                            <div className={styles.history_repo_title}>
                                                <div className={styles.history_repo_icon}><RepoIcon size={16} /></div>
                                                <p className={styles.history_repo_url}><a href="https://github.com/applemango/place">applemango / place</a></p>
                                            </div>
                                            <div className={styles.history_repo_info}>
                                                <div className={styles.history_repo_info_lang}>
                                                    <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor("TypeScript")}}></div>
                                                    <p>TypeScript</p>
                                                </div>
                                                <p className={styles.history_repo_info_date}>20 Aug 2022</p>
                                            </div>
                                        </div>
                                        <div className={styles.history_repo}>
                                            <div className={styles.history_repo_title}>
                                                <div className={styles.history_repo_icon}><RepoIcon size={16} /></div>
                                                <p className={styles.history_repo_url}><a href="https://github.com/applemango/images_library">applemango / images_library</a></p>
                                            </div>
                                            <div className={styles.history_repo_info}>
                                                <div className={styles.history_repo_info_lang}>
                                                    <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor("TypeScript")}}></div>
                                                    <p>TypeScript</p>
                                                </div>
                                                <p className={styles.history_repo_info_date}> 17 Sep 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
