import React from 'react';
import Link from "next/link";

type Props = {
  proId: Number
}

const ProductList = ( props: Props ) => {
  const { proId = 100 } = props;

  return (
    <div>
      <Link href='/'>
        Home
      </Link>
        <h2>
          <Link href='/product/1'>
            Product 1
          </Link>
        </h2>
        <h2>
          <Link href='/product/2'>
            Product 2
          </Link>
        </h2>
        <h2>
          <Link href='/product/3' replace>
            Product 3
          </Link>
        </h2>
        <h2>
          <Link href={`/product/${proId}`}>
            <>Product {proId}</>
          </Link>
        </h2>
    </div>
  )
}

export default ProductList