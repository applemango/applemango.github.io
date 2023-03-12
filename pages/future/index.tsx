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

import a from "./components/scss/any.module.scss"
import FutureText from "./components/TextFuture"

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
    // docs@abc.osaka
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
                width: "80%",
                margin: "0 auto",
                //minHeight: "100vh"
            }}>
                <TitleTextWithSimpleShowAnimation style={{
                    fontSize: "10vw",
                    marginBottom: 24,
                    fontWeight: 500,
                    //display: "flex",
                    //justifyContent: "center",
                }} text={"What I want to be"} />
                {/*<TitleTextWithSimpleShowAnimation style={{
                    fontSize: "10vw",
                    marginBottom: 24,
                    fontWeight: 500,
                    //display: "flex",
                    //justifyContent: "center",
                }} text={<>What I<span style={{
                    width: "2vw"
                }} /><span style={{
                }}> want</span><span style={{
                    width: "2vw"
                }} />to be</>} />*/}
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
                }}>まぁ過去の自分を責めるのもこれくらいにして、タイトル回収でもして終わるか、ここまで読んだ人何人くらいだろ2人ぐらいか?</p>

                <p style={{
                    fontSize: 48,
                    fontWeight: 300,
                    color: "#555",
                    margin: 0,
                }}>未来のなりたい姿</p>

                {/*<p style={{
                    fontSize: 20,
                    fontWeight: 300,
                    color: "#555",
                }} className={a.future_text}>
                    <span>ビジョン</span>を持って
                    <span>ソサイエティ</span>の
                    <span>イシュー</span>や
                    <span>プログレム</span>、人々の
                    <span>コモンセンス</span>を
                    <span>チェンジ</span>できるような
                    <span>イノベーション</span>の
                    <span>イニシアチブ</span>を
                    <span>コンセンサス</span>にとり、
                    <span>アジャイル</span>に
                    <span>アビリティ</span>を駆使し、
                    <span>ファクトベース</span>に
                    <span>PDCA</span>を回し、
                    <span>コンプライアンス</span>を守り、
                    <span>アピアランス</span>や
                    <span>KPI</span>だけを意識せず、
                    <span>ノウハウ</span>や
                    <span>コアコンピタス</span>を取得し
                    <span>プロフィット</span>を得たい
                </p>*/}
                <FutureText />


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
                {/*<p style={{
                fontSize: 20,
                fontWeight: 300,
                color: "#555",
                margin: 0,
                }}>一応三年後更新しようと思ってる</p>*/}
            </div>
        </Main>
        <Footer
            texts={footerTexts}
            links={footerLinks}
        />
        <div style={{
            backgroundColor: "#f8f8f8",
        }}>
            <p style={{
                margin: 0,
                marginTop: 0,
                fontSize: 12,
                fontWeight: 300,
                marginLeft: 20,
                color: "#ccc"
            }}>アドバイス通りにグロ画像を一つぽんと貼るだけにしとけばよかったかな?</p>
        </div>
    </div>
}
export default Future

/*
 * こんにちは
 * どうでした?、このサイト。
 * ちなみに制作時間は結構ギリギリまで放置してたからアイデア出し等を合せて1週間もかかってないんですよ
 * あと色々しながら作ってたからトータルでも5時間ぐらいな気もする
 * 上にもあったかもしれないけどアドバイス通りにグロ画像ひとつ、みたいなびっくり系のサイトだったら5分なんだけどね
 * まぁそれは置いといて、もう本当卒業よ、義務教育期間って長いようで短かったんだなって
 * だって中学校って小学校の1/2の長さだけど体感小学校の1/6ぐらいだよ
 * このままの速度で行くと高校なんて一瞬よ
 * 
 * 特に今年すごい短く感じた、いや今までゲームしかしてなくて今年はずっとプログラミングしてたってのが一番の原因だと思うけど
 * 特に夏からが短かった、MDQ(Manabi DX Quest)がちょうど夏から始まったんだけどその1ヶ月前ぐらいかな、忙しくなったの
 * MDQなんて早かった、課題を提出したと思ったらすぐに次の課題が出るからね
 * 2,3週間あるはずなのに、ほんと早い、気づいたら1ヶ月平気で経ってる
 * 今だって昨日3月始まったみたいな感じなのにもう10日ですよ
 * 
 * 気がついたら明日で終わり、少しチラ見したらもう明日が今日になる
 * 
 * 始業式にプリントをもらったじゃないですか、受験の曜日とかが書いてる１月から３月までの
 * あれ見た時まだ３ヶ月、1/4年あるんだ、って思ったのになかった(よく考えたら1/6年)
 * あれはもう昨日よ、ほんと、最近記憶がおかしくなったのかと本気で思う
 * まぁ何も考えないでぼーっと生きてるからそう感じるだけかもしれないけど
 * 
 * そういえば、この中学校生活でほぼ外に出ていないんだよね
 * 外にでたと言えば、図書館、葬式場、公園、病院、学校ぐらい
 * 病院と言っても2年で1回しかいってないけど
 * 
 * だから最近雪をみたいなと思ったんだけど、それも３ヶ月前、もう雪溶けたよ
 * だから来年かな、どこか行くとしたら
 * 
 * でもよく考えたら初日の出みに１２月３１日の10時ぐらいから一月一日の６時まで山登ったな
 * でも逆に言えばそれくらいだな
 * 
 * その話は飽きたから別の話書くけど
 * いやでもそろそろ終わりにしようかな
 * 
 * ゲームの話でもしようかなと思ったけど黒歴史ほるだけだし、それに今またハマったらシャレにならないし
 * 
 * まぁそろそろ終わりにするか
 * 
 * それにしてもよくQRコード書くの許可してくれたよな
 * コンテンツとか簡単に変えられるぞ
 * まぁ一人だけだから対応可能だったのか、あと少しくらい信用されてるのか?
 * でも次から一人くらい出てきそうだな、その時どうするんだろうこんな悪しき前例を作って
 * まぁそんな事する人いないか、意外と大変だし
 * 
 * そうなんですよ、意外と大変なんですよ、まず手でQRコードを書かないといけない、それが結構大変
 * あとQRコードのURLは https://abc.osaka/f なんだけどそれを https://git.abc.osaka/future にリダイレクトさせてるんだけど（もとのURLだとQRコードのサイズが大きくなるから描きづらくなる）
 * それにもCloudFlareを一枚かましてるからそれもすこし面倒と言えば面倒、だけどCloudFlareは元から使ってたからね
 * あと一番大変なのはsiteを作る作業
 * いや画像ひとつとかだと簡単なんだけどこのサイトみたいに途中ですスクロールの方向を変えるとかすると大変なんだよ
 * 途中でスクロールするの縦スクロールを要素のtranslateに変えてるだけだけどバグの元だし
 * あと地味に大変なのはドメイン、t.coみたいな短縮URLサービス使ってもいいんだけどそれだとこのどこにリダイレクトされるかたまったもんじゃないし (サービスが終了する可能性とURLが変わる可能性、変更、削除される可能性がある)
 * このabc.osakaってドメイン意外と高いんだよ、あと値段以外にもこのドメインって１年(最長で10年)で期限が切れるんだよ、期限が切れたら使えないから
 * 数年に一度更新しないといけないんだけどその時に大阪に住んでなきゃいけないんだよね(今どこに住んでるかを濁そうとしたけど.osakaドメイン使ってるから大阪に住んでるのバレバレだった)
 * だから当分の間は大阪にいなければいけない、まぁ大阪に法人とか立てればいいんだけど
 * 
 * まぁそんな事もありつつ、よく許可してくれたよほんと
 * 
 * 最後に、僕を信用しQRコードを書くことを許してくれた寛大な先生方に感謝します (海外のスタートアップとかによくある文言)
 * 
 * それと、
 * 
 * ごめん
 * ごめんなさい
 * 申し訳ありません
 * 誠に申し訳ありません
 * 心よりお詫び申し上げます
 * 
 * 多分3年間で何かをやらかしてる
 * 心当たりがあるのは25人ぐらいだけど多分もっと多いような気がする
 * 
 * 完全な自己満足につきあってくれてありがとう
 * 
 * ではまた
 * 
 * 令和6年 3月 12日 23時 05分
 * 
 */