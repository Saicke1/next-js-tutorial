import React from 'react';
import { NextRouter, useRouter } from "next/router";

type Props = {}

const Review = (props: Props) => {
    const router: NextRouter = useRouter();
    const { productId, reviewId} = router.query;

  return (
    <div><h1>The product {productId} has the review id: {reviewId}</h1></div>
  )
}

export default Review