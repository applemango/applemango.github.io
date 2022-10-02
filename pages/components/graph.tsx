import styles from "./styles/graph.module.scss"
import { useState } from "react"
const Graph = ({
    width
    ,height
    ,rows
    ,cols
    ,labelX
    ,labelY
    ,data
}:{
    width: number
    ,height: number
    ,labelX: string
    ,labelY: string
    ,rows: any[] //x
    ,cols: any[] //y
    ,data: {
        x:number
        ,y:number
        ,name:string
        ,color?: string
        ,labelX?: any
        ,labelY?: any
    }[]
}) => {
    const [nowHover, setNowHover] = useState(false)
    const [nowHoverData, setNowHoverData] = useState(0)
    /*const data = [
        {x:0.5,y:0.5,name:"test"}
        ,{x:0.3,y:0.7,name:"lol"}
        ,{x:0.1,y:0.8,name:"Tauri",color:"#2ecc71"}
        ,{x:0.8,y:0.8, name:"aaaa"}
    ]*/
    if(!width || !height || !labelY || !labelX || !rows || !cols || !data) return <div />
    return <div style={{display:"flex"}}>
        <div style={{height:height,transform:"translateX(-24px)",display:"flex",alignItems:"center"}}>
            <p style={{transform: "rotate(-90deg);",width:"fit-content",fontSize:18,fontWeight:500}}>{labelY}</p>
        </div>
        <div>
            <div className={styles.main} style={{width: width, height: height}}>
                { rows && rows.map((row:any, i:number) => {
                    return <div key={i} style={{
                        transform: `translateX(${ (width / (rows.length - 1)) * i}px)`
                        ,height:height
                    }} className={styles.bar_row}>
                        <div className={styles.bar_row_data}>
                            <p>{row}</p>
                        </div>
                    </div>
                })}
                { cols && cols.map((col:any, i:number) => {
                    return <div key={i} style={{
                        transform: `translateY(${ height - (height / (cols.length - 1)) * i}px)`
                        ,width:width
                    }} className={styles.bar_col}>
                        <div className={styles.bar_col_data}>
                            <p>{col}</p>
                        </div>
                    </div>
                })}
                { data && data.map((data:any, i:number) => {
                    return <div key={i} style={{
                        transform: `translateX(${ width * data.x }px) translateY(${ height * (1 - data.y) }px)`
                    }} className={`${styles.positionP} ${nowHover && nowHoverData != i ? styles.disabled : ""}`}>
                        <div className={styles.positionP_data}>
                            <div onMouseEnter={() => {
                                setNowHover(true)
                                setNowHoverData(i)
                            }} onMouseLeave={() => {
                                setNowHover(false)
                            }} style={{backgroundColor: data.color ? data.color : "#272325"}} />
                            <p>{data.name}</p>
                        </div>
                    </div>
                })}
                <div style={{width:width, height:height}} className={`${styles.positionP_hover_line} ${nowHover ? styles.active : ""}`}>
                    <div style={{
                        transform: `translateY(${height * (1 - data[nowHoverData].y) + 12}px)`
                        ,width: width * data[nowHoverData].x - 5
                    }}>
                        <p className={styles.positionP_hover_y}>{data[nowHoverData].labelY ? data[nowHoverData].labelY : data[nowHoverData].y}</p>
                    </div>
                    <div style={{
                        transform: `translateX(${ width * data[nowHoverData].x + 7 }px) translateY(${ height * (1 - data[nowHoverData].y) + 22}px)`
                        ,height: height * data[nowHoverData].y - 24
                    }}>
                        <p className={styles.positionP_hover_x}>{data[nowHoverData].labelX ? data[nowHoverData].labelX : data[nowHoverData].x}</p>
                    </div>
                </div>
            </div>
            <div className={styles.labelX}>
                <p>{labelX}</p>
            </div>
        </div>
    </div>
}
export default Graph