import Image from 'next/image';
import utilStyles from '../utils.module.css';
import styles from '../layout.module.css';

const name = "Rumi's Blog";

export default function Header({ home } : {home?: boolean}) {
    return (
        <header className={styles.header}>
        { home ? (
            <>
            <Image src="/images/profile.jpg" alt="Site logo" width={100} height={100} className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
        ): (
            <>
            <Image src="/images/profile.jpg" alt="Site logo" width={100} height={100} className={utilStyles.borderCircle}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
        ) }
        </header>
    );
}