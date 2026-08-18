import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import utilStyle from "./utils.module.css";
import { getPostsData } from './lib/post';

export default async function Home() {
  //SSGの場合
  const allPostsData = getPostsData(); 
  console.log(allPostsData);

  return (
    <>
      <section className={utilStyle.headingMd}>
        <p>
          私はフルスタックエンジニアです。
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={`${utilStyle.headingLg} ${utilStyle.boldText}`} style={{marginBlock: 30}}>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {
            allPostsData.map(({id, title, date, thumbnail }) => (
          <article key={id}>
            <Link href={`../posts/${id}`}>
              <Image src={thumbnail} alt="" width="640" height="426" className={styles.thumbnailImage}/>
              <p className={utilStyle.boldText}>{title}</p>
              <small className={utilStyle.lightText}>{date}</small>
            </Link>
          </article>
            ))
          }
        </div>
      </section>
    </>
  );
}
