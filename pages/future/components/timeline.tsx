import { motion } from "framer-motion"
import cas from "./scss/any.module.scss"

const createTimesArray = () => {
    const startYear = 2020
    const startMonth = 4

    const endYear = 2023
    const endMonth = 4

    const timesArray = []
    for (let year = startYear; year <= endYear; year++) {
        const monthData = []
        for (let month = 1; month <= 12; month++) {
            if(year == startYear && month < startMonth)
                continue
            if(year == endYear && month > endMonth)
                break
            monthData.push(month)
        }
        timesArray.push({
            title: year,
            data: monthData,
        })
    }
    return timesArray
}

const ArrayLengthSum = (arr: Array<any> | any) => {
    if(!Array.isArray(arr))
        return 1
    let sum = 0;
    arr.map((X)=> sum += ArrayLengthSum(X))
    return sum
}
/*const data = [
    {color: "#f5f5f5", start: 1, end: 3, line: 1, name: "game"},
    {color: "#f5f5f5", start: 2, end: 8, line: 2, name:"hello world!"},
    {color: "#f5f5f5", start: 6, end: 9, line: 1, name: "python"},
    {color: "#f5f5f5", start: 1, end: 3, line: 3, name: "game"},
    {color: "#f5f5f5", start: 2, end: 8, line: 4, name:"hello world!"},
    {color: "#f5f5f5", start: 6, end: 9, line: 5, name: "python"},
    {color: "#f5f5f5", start: 2, end: 8, line: 6, name:"hello world!"},
]*/
const data = [
    {color: "#f5f5f5", start: 1, end: 17, line: 3, name: "Game"},
    {color: "#f5f5f5", start: 12, end: 22, line: 4, name: "黎明期に入る"},
    {color: "#f5f5f5", start: 13, end: 15, line: 6, name: "学校を休む"},
    {color: "#f5f5f5", start: 13, end: 25, line: 5, name: "人生を考え始める"},
    {color: "#f5f5f5", start: 23, end: 25, line: 5, name: "時間大事にで生きようと思う"},

    {color: "#f5f5f5", start: 18, end: 20, line: 1, name: "scratch"},
    {color: "#f5f5f5", start: 21, end: 22, line: 1, name: "言語を作る"},
    {color: "#f5f5f5", start: 23, end: 25, line: 1, name: "scratchの限界を感じる"},

    {color: "#f5f5f5", start: 22, end: 25, line: 2, name: "HTML CSSを始める"},
    {color: "#f5f5f5", start: 23, end: 25, line: 3, name: "ROR, djangoに手を出す"},

    {color: "#f5f5f5", start: 26, end: 37, line: 2, name: "Next.jsを始める"},
    {color: "#f5f5f5", start: 28, end: 32, line: 3, name: "Flaskを始める"},
    {color: "#f5f5f5", start: 33, end: 37, line: 3, name: "速度を求めてGin, FastAPI, Actixに浮気する"},

    {color: "#f5f5f5", start: 29, end: 35, line: 5, name: "MANABi DX QUEST"},
    {color: "#f5f5f5", start: 33, end: 35, line: 5, name: "Goldをもらうためにやる"},

    {color: "#f5f5f5", start: 29, end: 33, line: 4, name: "Machine Learning, DLをやる"},
    {color: "#f5f5f5", start: 34, end: 37, line: 4, name: "diffusion modelやLLMに興味を持つ"},

    {color: "#f5f5f5", start: 30, end: 37, line: 1, name: "ブログを始める"},
    {color: "#f5f5f5", start: 33, end: 37, line: 1, name: "少しずつ伸びてきた (多い時で一日50pv)"},

    {color: "#f5f5f5", start: 36, end: 37, line: 5, name: "競プロを始める"},

    

]
const points = [
    {position: {x: 1, y: 6}, color: "#f6f6f6", img: "", title: "入学式"},
    {position: {x: 11.5, y: 6}, color: "#f6f6f6", img: "", title: "進級"},
    {position: {x: 27, y: 6}, color: "#f6f6f6", img: "", title: "修学旅行"},
    {position: {x: 34, y: 6}, color: "#f6f6f6", img: "", title: "進路決定"},
    {position: {x: 36, y: 6}, color: "#f6f6f6", img: "", title: "卒業式"},

    {position: {x: 23, y: 4}, color: "#f6f6f6", img: "", title: "抜ける"},
    
    {position: {x: 18, y: 3}, color: "#f6f6f6", img: "", title: "飽きた"},

    {position: {x: 26, y: 1}, color: "#f6f6f6", img: "", title: "やめる"},

    {position: {x: 26, y: 3}, color: "#f6f6f6", img: "", title: "挫折"},
]

const yearComment = {
    2020: "なんかあんまり記憶にないな、でも昨日のよう",
    2021: "あまり鮮明な記憶がないな、けど終了式を鮮明に覚えてる",
    2022: "記憶が戻ってきた",
    2023: "一年ってこんなに早かった?"
}
const getYearComment = (year: number) => {
    if(Object.keys(yearComment).includes(year.toString())) {
        const yc:any = yearComment
        const x:any = yc[year]
        return x
    }
    return ""
}

const TimeLine = () => {
    const times = createTimesArray()
    const gridWight = 100
    const length = ArrayLengthSum(times.concat().map((X)=> X.data))
    //console.log(createTimesArray())
    return <div style={{
        height: "100vh",
        minWidth: "120vw",
        width: "fit-content",
        padding: "0 24px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none"
    }}>
        <div style={{
            display: "flex",
            width: "fit-content",
            height: "fit-content",
        }}>
            {times.map((time, i)=> <div key={i} style={{

            }}>
                <div style={{
                    padding: "4px 8px",
                    borderRight: "1px solid #ddd",
                    display: "flex",
                    alignItems: "flex-end",
                }}>
                    <p style={{
                    fontSize: "max(3vw, 32px)",
                    color: "#252525",
                    margin: 0,
                    lineHeight: 1,
                    }}>{time.title}</p>
                    <p style={{
                        fontSize: "1vw",
                        color: "#252525",
                        margin: 0,
                        marginLeft: 6,
                        marginBottom: 0,
                        lineHeight: 1,
                    }}>{getYearComment(time.title)}</p>
                </div>
                <div style={{
                    display: "flex",
                    flexWrap: "nowrap",
                }}>
                    {time.data.map((month, j)=> <div key={j} style={{
                        padding: "4px 8px",
                        width: gridWight,
                        borderRight: "1px solid #ddd",
                    }}>
                        <p style={{
                            fontSize: "2vw",
                            color: "#252525",
                            margin: 0
                        }}>{month}</p>
                    </div>)}
                </div>
            </div>)}
        </div>
        <div style={{
            position: "relative",
            height: "calc(100% - 94px)"
        }}>
            {data.map((item, i)=> <div key={i} className={cas.timeline_data_item} style={{
                marginTop: 12,
                height: "calc(100% / 6 - 24px)",
                width: (item.end - item.start + 1) * gridWight,
                backgroundColor: item.color,
                display: "flex",
                position: "absolute",
                left: (item.start - 1) * gridWight,
                top: `calc(100% / 6 * ${(item.line - 1)})`,
                borderRadius: 100,

                alignItems: "center",
                paddingLeft: 24,

                "--hover-color": "#ddd",
                transition: "all 0.3s ease",
            } as React.CSSProperties} /*variants={{
                offscreen: {
                    y: 100,
                    opacity: 0
                },
                onscreen: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        duration: .2,
                        delay: 0
                    }
                }
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: false, amount: 0}}*/>
                <p style={{
                    fontSize: "2vh",
                    color: "#666",
                    fontWeight: 300,
                }}>{item.name}</p>
                <p style={{
                    fontSize: "1vh",
                    color: "#999",
                    fontWeight: 300,
                }}></p>
            </div>)}
            {points.map((item, i)=> <div key={i} className={cas.timeline_data_item} style={{
                borderRadius: "100%",
                marginTop: 12,
                height: "calc(100% / 6 - 24px)",
                width: "calc((100vh - 94px) / 6 - 24px)",
                backgroundColor: item.color,
                display: "flex",
                position: "absolute",
                left: (item.position.x - 1) * gridWight,
                top: `calc(100% / 6 * ${(item.position.y - 1)})`,

                alignItems: "center",
                justifyContent: "center",

                "--hover-color": "#ddd",
                transition: "all 0.3s ease",
            } as React.CSSProperties} /*variants={{
                offscreen: {
                    y: 100,
                    opacity: 0
                },
                onscreen: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        duration: .2,
                        delay: 0
                    }
                }
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: false, amount: 0}}*/>
                <p style={{
                    fontSize: "2vh",
                    color: "#666",
                    fontWeight: 300,
                }}>{item.title}</p>
            </div>)}
        </div>
    </div>
}
export default TimeLine;