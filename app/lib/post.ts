import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';
import { notFound } from "next/navigation";

type PostData = {
    id: string,
    title: string,
    date: string,
    thumbnail: string,
    blogContentHTML: string
};

// 一覧用
type PostListItem = Omit<PostData, 'blogContentHTML'>;


const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export function getPostsData(): PostListItem[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, ""); //ファイル名(id)

        //MDファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult.data,
        } as PostListItem;
    });
    return allPostsData;
}

// idに基づいてブログ投稿データを返す
export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);

    if(!fs.existsSync(fullPath)) {
        notFound();
    }
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    const blogContent = await remark()
        .use(html)
        .process(matterResult.content);

    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    } as PostData;
}