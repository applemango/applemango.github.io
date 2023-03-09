import { MarkGithubIcon } from "@primer/octicons-react"
import Link from "next/link"
import Footer from "./components/footer"
import Header from "./components/header"
import Projects from "./components/projects"
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
                    fontSize: "12vw",
                    marginBottom: 24,
                    fontWeight: 500,
                    display: "flex",
                    justifyContent: "center",
                }} text={<>What I<span style={{
                    width: "2vw"
                }} /><span style={{
                }}> want</span><span style={{
                    width: "2vw"
                }} />to be</>} />
                {/*<TitleTextWithSimpleShowAnimation delay={.5} style={{
                    fontSize: "4vw",
                    marginBottom: 24,
                    fontWeight: 500,
                }} text={<Link href="https://youtube.com">最初に言っとく,こんなサイト見るだけ時間の無駄だよ</Link>} />*/}
            </div>
            <div style={{
                width: "80%",
                margin: "0 auto",
            }}>
            {/*<ScrollClipAnimationText text={"ふうっ"} />
            <ScrollClipAnimationText text={"ふうっ"} />
            <ScrollClipAnimationText text={"ふうっ"} />
            <ScrollClipAnimationText text={"ふうっ"} />*/}
            <h1 style={{
                fontSize: 48,
                fontWeight: 300,
                color: "#252525"
            }}>What I want to be the future</h1>
            <p style={{
                fontSize: 20,
                fontWeight: 300,
                color: "#555",
                marginBottom: 0,
            }}>もう卒業式ですよ、早い、ほんと早い、1年と2年の頃がつい昨日のように感じる</p>
            <p style={{
                fontSize: 20,
                fontWeight: 300,
                color: "#555",
                margin: 0,
            }}>修学旅行なんて9ヶ月前、信じられる?、信じれない本当に、もっと信じられないのはもう冬休みが終わって3ヶ月経とうとしている事</p>
            <p style={{
                fontSize: 20,
                fontWeight: 300,
                color: "#555",
                margin: 0,
            }}>義務教育期間3,000日、残り0日、中学校生活1000日あまり、残り0日、中学生というインパクトのある肩書きがなくなり高校生というありふれた肩書きになるんだよ、まぁ泣いても笑ってもこれが最後だからこれくらいでとどめておこう</p>

            <p style={{
                fontSize: 20,
                fontWeight: 300,
                color: "#555",
                marginBottom: 0,
            }}>本題に行くけど、未来のなりたい姿と言っても明確に決まっていたら進路に苦労しないんだよ、それに最終的に行く着く先は死だよ(諸説あり)</p>
            <p style={{
                fontSize: 20,
                fontWeight: 300,
                color: "#555",
                margin: 0,
            }}>そして1年の目標も&quot;色々する&quot;などと抽象化した人に長期的な目標が立てれるのかね、まぁ御託を並べるのはこのくらいにして一度3年間を振り返るか</p>



            <h1 style={{
                fontSize: 48,
                fontWeight: 300,
                color: "#252525"
            }}>Looking back</h1>
            {/*<TitleTextWithSimpleShowAnimation delay={.5} style={{
                fontSize: "3vw",
                marginBottom: 24,
                fontWeight: 500,
            }} text={<Link href="https://youtube.com">Lsooking back</Link>} />*/}
            </div>
            {/*<TextNormal>
                <>
                未来のなりたい姿か、...
                <br />
                僕にはたった数行しか書けないスペースは少なすぎるからこのsiteに書くよ
                <br />
                <br/>
                とりあえず未来を考える前にこの3年間で何をしたか見るか</>
            </TextNormal>*/}
            <ScrollHorizontal>
                <div style={{
                    margin: "0 10vw 0 10vw"
                }}>
                <TimeLine />
                </div>
            </ScrollHorizontal>
            <div style={{
                width: "80%",
                margin: "0 auto",
            }}>
                <h2 style={{
                    fontSize: 42,
                    fontWeight: 300,
                    color: "#252525"
                }}>The apps I made</h2>
                <Projects />
                <p style={{
                    fontSize: 12,
                    fontWeight: 300,
                    color: "#555",
                }}>本当はもっと色々あるけど色々と事情が...</p>
                {/*<TitleTextWithSimpleShowAnimation delay={.5} style={{
                        fontSize: "4vw",
                        marginBottom: 24,
                        fontWeight: 500,
                    }} text={<Link href="https://youtube.com">Reflection</Link>} />*/}
                <h1 style={{
                    fontSize: 48,
                    fontWeight: 300,
                    color: "#252525",
                    
                }}>What I want to be the future</h1>
                <p style={{
                    fontSize: 20,
                    fontWeight: 300,
                    color: "#555",
                    marginBottom: 0,
                }}>なんか最初の2年何もしてなくね?、22, 23と比べて20, 21スカスカすぎない？</p>
                <p style={{
                    fontSize: 20,
                    fontWeight: 300,
                    color: "#555",
                }}>(一応言い訳するとGameで上位0.0001%(19/13000000)とかになったり色々したけどそんな事書いても意味ないし)</p>
                <p style={{
                    fontSize: 20,
                    fontWeight: 300,
                    color: "#555",
                    margin: 0,
                }}>まぁ過去の自分を殴るのもこれくらいにして、タイトル回収でもして終わるか、ここまで読んだ人何人くらいだろ2人ぐらいか?</p>

                <p style={{
                    fontSize: 64,
                    fontWeight: 300,
                    color: "#555",
                    margin: 0,
                }}>未来のなりたい姿</p>

                <p style={{
                    fontSize: 24,
                    fontWeight: 300,
                    color: "#555",
                }}>ビジョンを持ってソサイエティのイシューやプログレム、人々のコモンセンスをチェンジできるようなイノベーションのイニシアチブをコンセンサスにとり、アジャイルにアビリティを駆使し、ファクトベースにPDCAを回し、コンプライアンスを守り、アピアランスやKPIだけを意識せず、ノウハウやコアコンピタスを取得しプロフィットを得たい</p>

                {/*<div>
                    ではまたいつか

                    それにしてもよく許可してくれたな、QRコード書くの
                    <br />
                    最後に、僕を信用しQRコードを書くことを許してくれた寛大な先生方に感謝します (海外のスタートアップとかによくある文言)
                    <br />
                    それとごめん、多分3年間で何かをやらかしてる
                </div>*/}
            </div>
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
            <div style={{
                width: "80%",
                margin: "0 auto",
            }}>
                <TitleTextWithSimpleShowAnimation style={{
                    fontSize: "15vw",
                    marginBottom: 24,
                    fontWeight: 500,
                }} text={"またいつか"} />
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                <TitleTextWithSimpleShowAnimation delay={.2} style={{
                    fontSize: "4vw",
                    marginBottom: 24,
                    fontWeight: 500,
                }} text={"五年後"} />
                <TitleTextWithSimpleShowAnimation delay={1.6} style={{
                    fontSize: "4vw",
                    marginBottom: 24,
                    fontWeight: 500,
                }} text={"あるいは百年後、"} />
                <TitleTextWithSimpleShowAnimation delay={3} style={{
                    fontSize: "4vw",
                    marginBottom: 24,
                    fontWeight: 500,
                }} text={"または永遠に"} />
                </div>
                <p>令和6年 3月 14日</p>
                <p style={{
                fontSize: 20,
                fontWeight: 300,
                color: "#555",
                margin: 0,
                }}>一応三年後更新しようと思ってる</p>
            </div>
        </Main>
        <Footer
            texts={footerTexts}
            links={footerLinks}
        />
    </div>
}
export default Future