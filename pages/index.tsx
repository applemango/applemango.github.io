import type { NextPage } from 'next'

import Heads from "./components/heads"
import Languages from "./components/languages"

import styles from "./styles/index.module.scss"
import animations from "./components/styles/animations.module.scss"

const Home: NextPage = () => {
    return (
        <div className={ styles.main }>
            <Heads title={"AppleMango"} description={"AppleMango - 主にNext.jsやFlaskを使う色々やりたいと思ってる人"} />
            <div className={styles.main_}>
                <p className={styles.title_path}><a className={`${animations.underline} ${animations.simple}`} href="https://github.com/applemango">applemango</a> / README.md</p>
                <h1>Hello! I&apos;m AppleMango</h1>
                <p>色々, 最近は主にNext.jsやFlaskを使ってWeb Appを作っています</p>
                <p>稀にMLやDLをしている</p>
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
            </div>
        </div>
    )
}

export default Home
