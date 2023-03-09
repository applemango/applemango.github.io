import styles from "./scss/any.module.scss"
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Img = ({src, top}:{
    src: string,
    top?: number
}) => {
    const loader = () => src
    return <div className={styles.container}>
        <Image
            layout="fill"
            objectFit="contain"
            loader={loader}
            src={src}
            alt={""}
            style={{
                objectFit: "cover"
            }}
        />
    </div>
}
export default Img;