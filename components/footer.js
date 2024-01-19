import styles from "../styles/Footer.module.css"
import Image from 'next/image';

export default function Footer(){
    return(
        <footer>
 <p><Image src="/images/ibara01.png" width={20} height={20} />スナックいばら</p>
</footer>
    )
}