import Footer from "./components/footer"
import Header from "./components/header"
import ScrollClipAnimationText from "./components/scrollClipAnimationText"
import { Char, ScrollText } from "./components/scrollText"
import { TitleTextWithSimpleShowAnimation } from "./components/Text"

const Future = () => {
    return <div>
        <div style={{backgroundColor: "#f8f8f8"}}>
            <div style={{borderRadius: "0 0 64px 64px", backgroundColor: "#fff", minHeight: "calc(100vh - 250px)", paddingBottom: 64}}>
                <div style={{
                    height: "100vh"
                }}>
                    <Header page={{
                        "home": "/",
                        "future": "/future",
                        "about": "/"
                    }} />
                    <TitleTextWithSimpleShowAnimation style={{
                        fontSize: "15vw",
                        marginBottom: 24
                    }} text={<>
                        <Char char={"H"} />
                        <Char char={"e"} />
                        <Char char={"l"} />
                        <Char char={"l"} />
                        <Char char={"o"} />
                        <Char char={","} />
                        <span> </span>
                        <Char char={"w"} />
                        <Char char={"o"} />
                        <Char char={"r"} />
                        <Char char={"l"} />
                        <Char char={"d"} />
                        <Char char={"!"} />
                    </>} />
                    <TitleTextWithSimpleShowAnimation style={{
                        marginTop: 24
                    }} delay={1} text={
                        <ScrollClipAnimationText style={{
                            fontSize: "6vw",
                            fontWeight: 500,
                            marginTop: 24
                        }} text="Coming soon?" />
                    } />
                </div>
                {/*<ScrollClipAnimationText style={{fontSize: 24}} text="にしてもこのサイトどうしよう" />*/}
            </div>
        </div>
        <Footer texts={[{
            animationDuration: 8000,
            text: "git.abc.osaka　　abc.osaka",
            width: 180
        },{
            text: "FOR SCHOOL RULE",
            width: 140
        }]} links={[{
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
        }]} />
    </div>
}
export default Future