import React from 'react';
import { useRouter } from "next/router";

type Props = {}

const Doc = (props: Props) => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);

    if(params.length === 2){
        return <h1> Viewing docs for first param {params[0]} and second param {params[1]}</h1>
    } else if(params.length === 1){
        return <h1>Viewing docs with only one param {params[0]}</h1>
    }

  return (
    <div>Homepage of Docs</div>
  )
}

export default Doc