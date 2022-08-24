import { getColor } from "../../lib/languagesColor"

import styles from "./styles/progress.module.scss"

type Props = {
    data: any
}
const ProgressBar = ({ data }:Props) => {
    return (
        <div
            className={styles.main}
        >
            { data &&
                Object.keys(data).map((l:string, index:number) => (
                    <div
                        key={index}
                        className={styles.bar}
                        style={{
                            width: Object.keys(data).length - 1 == index ? `${data[l]}%` : `calc(${data[l]}% - 2px)`
                            ,backgroundColor: getColor(l)
                        }}
                    />
                ))
            }
        </div>
    )
}
export default ProgressBar