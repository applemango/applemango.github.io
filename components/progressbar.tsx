import { getColor } from "../lib/languagesColor"

import styles from "./styles/progress.module.scss"

const ProgressBar = ({ data, className, style }:{
    data: any,
    className?: string,
    style?: React.CSSProperties
}) => {
    const getData = (l: any, i: number = 0) =>{ return Array.isArray(data[l]) ? data[l][i] : data[l] }
    const getColors = (l: any, i: number = 1) => { return Array.isArray(data[l]) ? data[l][i] : getColor(l) }
    return (
        <div
            className={`${styles.main} ${className}`}
            style={style}
        >
            { data &&
                Object.keys(data).map((l:string, index:number) => (
                    <div
                        key={index}
                        className={styles.bar}
                        style={{
                            width: Object.keys(data).length - 1 == index || getData(l) < 1 ? (
                                `${getData(l)}%`
                            ) : (
                                `calc(${getData(l)}% - 2px)`
                            )
                            ,backgroundColor: getColors(l)
                        }}
                    />
                ))
            }
        </div>
    )
}
export default ProgressBar