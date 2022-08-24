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
                <p>色々してる, 最近は主にNext.jsやFlaskを使ってWeb Appを作っています</p>
                <p>稀にMLやDLをしてる</p>
                <Languages
                    title={"Most Used Languages"}
                    data={
                        {
                            "TypeScript":25
                            ,"Python":20
                            ,"JavaScript":15
                            ,"Sass":15
                            ,"CSS":5
                            ,"Other":20
                        }
                    }
                />
            </div>
        </div>
    )
}

export default Home
