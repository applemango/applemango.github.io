import { InfoIcon, RepoIcon } from "@primer/octicons-react"
import { getColor } from "../../lib/languagesColor"
import styles from "../styles/index.module.scss"

const Histories = ({
    children
}:{
    children: any
}) => {
    return <div className={styles.histories}>
        {children}
    </div>
}

const History = ({
    children
    ,name
    ,date
    ,icon = <RepoIcon size={16} />
}:{
    children: any
    name: string
    date: string
    icon?: React.ReactElement
}) => {

    return <div className={styles.history}>
        <div className={styles.history_icon}>{icon}</div>
        <div className={styles.history_main}>
            <div className={styles.history_info}>
                <p>{name}</p><p>{date}</p>
            </div>
            {children}
        </div>
    </div>
}

const Repo = ({
    url
    ,name
    ,lang
    ,date
    ,icon = <RepoIcon size={16} />
}:{
    url: string
    ,name: string
    ,lang: string
    ,date: string
    ,icon?: React.ReactElement
}) => {
    return <div className={styles.history_repo}>
        <div className={styles.history_repo_title}>
            <div className={styles.history_repo_icon}>{icon}</div>
            <p className={styles.history_repo_url}><a href={url}>{name}</a></p>
        </div>
        <div className={styles.history_repo_info}>
            <div className={styles.history_repo_info_lang}>
                <div className={styles.history_repo_info_lang_color} style={{backgroundColor: getColor(lang)}}></div>
                <p>{lang}</p>
            </div>
            <p className={styles.history_repo_info_date}>{date}</p>
        </div>
    </div>
}

const MiniInfo = ({
    name
    ,date
    ,icon
}:{
    name: string
    ,date: string
    ,icon?: React.ReactElement
}) => {
    return <div className={styles.history_repo}>
    <div className={styles.history_repo_title}>
        {icon && <div className={styles.history_repo_icon}>{icon}</div>}
        <p className={styles.history_repo_url}>{name}</p>
    </div>
    <div className={styles.history_repo_info}>
        <div className={styles.history_repo_info_lang}>
        </div>
        <p className={styles.history_repo_info_date}>{date}</p>
    </div>
</div>
}

Histories.History = History
Histories.Repo = Repo
Histories.MiniInfo = MiniInfo
export default Histories