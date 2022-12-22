import React from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
    posts: []
}

const PostList = ({posts}: Props) => {

    const router = useRouter();    

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <h1>List of Posts</h1>
        <button onClick={() => router.push("/")} style={{width: "100px"}}>Go back to Homepage</button>
        {posts.map(post => {
            return (
                <div key={post["id"]}>
                    <Link href={`/posts/${post["id"]}`} passHref>
                        <h2>{post["id"]} {post["title"]}</h2>
                    </Link>
                    
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default PostList;

export async function getStaticProps () {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    
    return {
        props: {
            posts: data.slice(0,3),
        }
    }
};