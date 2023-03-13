import { useState } from "react"
import a from "./scss/any.module.scss"

const Texts = [
    "ビジョン","を持って",
    "ソサイエティ","の",
    "イシュー","や",
    "プログレム","、人々の",
    "コモンセンス","を",
    "チェンジ","できるような",
    "イノベーション","の",
    "イニシアチブ","を",
    "コンセンサス","にとり、",
    "アジャイル","に",
    "アビリティ","を駆使し、",
    "ファクトベース","に",
    "PDCA","を回し、",
    "コンプライアンス","を守り、",
    "アピアランス","や",
    "KPI","だけを意識せず、",
    "ノウハウ","や",
    "コアコンピタス","を取得し",
    "プロフィット","を得たい"
]

const TranslatedTexts:any = {
    "ビジョン":"明確な目標",
    "ソサイエティ":"現代社会",
    "イシュー":"課題",
    "プログレム":"問題",
    "コモンセンス":"常識的価値観",
    "チェンジ":"変える事が",
    "イノベーション":"革命的なプロジェクト",
    "イニシアチブ":"主導的な立場",
    "コンセンサス":"合意のもと",
    "アジャイル":"迅速",
    "アビリティ":"個々の能力",
    "ファクトベース":"憶測ではなくデータを元に",
    "PDCA":"計画、実行、観察、改善のサイクル",
    "コンプライアンス":"法令はさる事ながら倫理、モラル",
    "アピアランス":"見た目などの表層上の事",
    "KPI":"利益",
    "ノウハウ":"技術の蓄積",
    "コアコンピタス":"他人に無い様な自分の強み",
    "プロフィット":"利益"
}

const FutureText = () => {
    const [translated, setTranslated] = useState(false)
    return <div>
        <div className={a.translate}>
            <div>
                <p>このページを翻訳しますか?</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#888" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
            <p>翻訳のターゲット言語</p>
            <div>
                <select value={"日本語"}>
                    <option value="日本語">日本語</option>
                </select>
            </div>
            <div>
                <input id="translate" type="checkbox" onChange={() => setTranslated((mode) => !mode)} checked={translated} />
                <label htmlFor="translate">この言語のページを常に翻訳する</label>
            </div>
            <div>
                <button onClick={()=> setTranslated(true)}>翻訳</button>
                <button onClick={()=> setTranslated(false)}>今は実行しな..</button>
            </div>
        </div>
        <p style={{
            fontSize: 20,
            fontWeight: 300,
            color: "#555",
        }} className={a.future_text}>
            {translated && Texts.filter((_, i)=> i % 2 == 1).map((text, i)=> <>
            <span>
                <span style={{
                    marginLeft: 2,
                    backgroundColor: "#eee",
                    color: "#777",
                    opacity: 1,
                    textDecoration: "none"
                }}>
                    {TranslatedTexts[Texts[i*2]]}
                </span>
            </span>
            {text}
            </>)}

            {!translated && Texts.filter((_, i)=> i % 2 == 1).map((text, i)=> <>
            <span>
                <span style={{}}>
                    {Texts[i*2]}
                </span>
                <span style={{
                    marginLeft: 2,
                }}>
                    {TranslatedTexts[Texts[i*2]]}
                </span>
            </span>
            {text}
            </>)}
        </p>
    </div>
}
export default FutureText;