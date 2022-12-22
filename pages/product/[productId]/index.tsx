import React from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {}

const ProductDetail = (props: Props) => {
    const router = useRouter();
    const productId = router.query.productId;
  return (
    <div>
      <h1>Detail about the Product {productId}</h1>
      <Link href='/product'>
        Going back to the products
      </Link>
    </div>
  )
}

export default ProductDetail