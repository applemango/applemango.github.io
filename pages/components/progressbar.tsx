import { getColor } from "../../lib/languagesColor"

import styles from "./styles/progress.module.scss"

type Props = {
    data: any
    ,className?: any
    ,style?: any
}
const ProgressBar = ({ data, className, style }:Props) => {
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
                            width: Object.keys(data).length - 1 == index ? Array.isArray(data[l]) ? `${data[l][0]}%` : `${data[l]}%` : `calc(${Array.isArray(data[l]) ? data[l][0] : data[l]}% - 2px)`
                            ,backgroundColor: Array.isArray(data[l]) ? data[l][1] : getColor(l)
                        }}
                    />
                ))
            }
        </div>
    )
}
export default ProgressBar