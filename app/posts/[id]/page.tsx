import { getPostData } from "@/app/lib/post";
import utilStyles from "../../utils.module.css";
import Header from "@/app/ui/header";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <>
    <Header />
    <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <small className={utilStyles.lightText}>{postData.date}</small>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
        <div>
        <Link href="/">←ホームへ戻る</Link>
        </div>
    </article>
    </>
  );
}
