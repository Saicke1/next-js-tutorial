import React from 'react';
import Link from "next/link";

type Props = {
    post: {
        id: number;
        title: string;
        body: string;
    }
}

const Post = ({ post }: Props) => {
  return (
    <div>
        <Link href='/posts'>
        Going back to the posts
        </Link>
        <h1>Single Post:</h1>
        <h2>{post.id} {post.title}</h2> 
        <p>{post.body}</p>
    </div>
  )
}

export default Post;

export async function getStaticPaths () {
    return {
        paths: [
            {
                params: { postId: "1"}
            },
            {
                params: { postId: "2"}
            },
            {
                params: { postId: "3"}
            }
        ],
        fallback: false,
    }
};

export async function getStaticProps (context: { params: { postId: number } }) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    
    return {
        props: {
            post: data,
        }
    }
}