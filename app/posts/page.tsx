import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post',
};

export default function Page() {
    return (
        <div>
            <h1>最初の投稿</h1>
            <Link href='/'>ホームへ戻る</Link>
        </div>
    );
}