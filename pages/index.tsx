import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {}

const index = (props: Props) => {

  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order.");
    router.push("/product");
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Welcome on my Homepage.</h1>
      <Link href='/blog' legacyBehavior>
      <a>Blog</a>
      </Link>
      <Link href='/product'>
        Products
      </Link>
      <button onClick={handleClick} style={{width: "100px"}}>Please Order</button>
      <h1>Next.js Pre-rendering</h1>
      <button onClick={() => router.push("/users")} style={{width: "100px"}}>See here the users</button>
      <h3>SSG with Dynamic Parameters</h3>
      <button onClick={() => router.push("/posts")} style={{width: "100px"}}>See the posts</button>
    </div>
  )
}

export default index
