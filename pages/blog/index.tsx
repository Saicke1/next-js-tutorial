import React from 'react';
import Link from "next/link";

type Props = {}

const blog = (props: Props) => {
  return (
    <div>
      Blog Page
      <Link href='/'>
        Home
      </Link>
    </div>
  )
}

export default blog