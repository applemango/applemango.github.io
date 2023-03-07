import { MarkGithubIcon } from "@primer/octicons-react"
import Link from "next/link"
import Footer from "./components/footer"
import Header from "./components/header"
import ScrollClipAnimationText from "./components/scrollClipAnimationText"
import ScrollHorizontal from "./components/scrollHorizontalv2"
import { Char, ScrollText } from "./components/scrollText"
import { TitleTextWithSimpleShowAnimation } from "./components/Text"
import TimeLine from "./components/timeline"

type element = React.ReactComponentElement<any>
type elements = Array<element>

const Main = ({children}:{
    children: element | elements
}) => {
    return <div style={{backgroundColor: "#f8f8f8"}}>
    <div style={{borderRadius: "0 0 64px 64px", backgroundColor: "#fff", minHeight: "calc(100vh - 250px)", paddingBottom: 64}}>
        <div style={{
            minHeight: "100vh"
        }}>
            {children}
        </div>
    </div>
</div>
}

const footerTexts = [{
    animationDuration: 8000,
    text: "git.abc.osaka　　abc.osaka",
    width: 180
},{
    text: "FOR SCHOOL RULE",
    width: 140
}]
const footerLinks = [{
    href: "https://github.com/applemango/applemango.github.io/blob/main/pages/future/index.tsx",
    content: "このサイトのコード | source code"
},{
    href: "https://abc.osaka/edit/privacy-policy",
    content: "プライバシーポリシー | Privacy Policy"
},{
    href: "https://forms.gle/qh1fdKDp82Q5m4ER6",
    content: "お問い合わせフォーム | Contact Form"
},{
    href: "https://abc.osaka",
    content: "メインページ | Main Page"
}]

const TextNormal = ({children, margin = false}:{
    children: string | element | elements,
    margin?: boolean
}) => {
    return <div>
        <p style={{
            fontSize: 20,
            color: "#222",
            margin: margin ? "initial" : `${margin} 0`
        }}>
            {children}
        </p>
    </div>
}

const Future = () => {
    return <div>
        <Header page={{
            "home": "/",
            "future": "/future",
            "about": "/"
        }} />
        <Main>
            <div style={{
                //minHeight: "100vh"
            }}>
                <TitleTextWithSimpleShowAnimation style={{
                    fontSize: "15vw",
                    marginBottom: 24,
                    fontWeight: 500,
                }} text={"Hello, world!"} />
                <TitleTextWithSimpleShowAnimation delay={.5} style={{
                    fontSize: "4vw",
                    marginBottom: 24,
                    fontWeight: 500,
                }} text={<Link href="https://youtube.com">こんなサイト見るだけ損だよ</Link>} />
            </div>
            <TextNormal>
                <>
                未来のなりたい姿か、...
                <br />
                僕にはたった数行しか書けないスペースは少なすぎるからこのsiteに書くよ
                <br />
                <br/>
                とりあえず未来を考える前にこの3年間で何をしたか見るか</>
            </TextNormal>
            <ScrollHorizontal>
                <TimeLine />
            </ScrollHorizontal>
            {/*<ScrollHorizontal>
                <div>
                    
                </div>
            <div style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    width: "fit-content",
                    padding: "0 24px",
                    backgroundColor: "#eee",
                }}>
                    {(new Array(10)).fill(0).map((_, i) => <div key={i} style={{
                        height: "80%",
                        width: 500,
                        backgroundColor: i == 9 ? "red" : i == 0 ? "blue" : "#fff",
                        borderRadius: "64px",
                        marginLeft: 24,
                    }}>
                    </div>)}
                </div>
                </ScrollHorizontal>*/}
            <div>
                ではまたいつか

                それにしてもよく許可してくれたな、QRコード書くの
            </div>
        </Main>
        <Footer
            texts={footerTexts}
            links={footerLinks}
        />
    </div>
}
export default Future