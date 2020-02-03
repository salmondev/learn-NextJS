import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import fetch from 'isomorphic-unfetch'

const Hello = ({ data }) => (
<React.Fragment>
  <h1>data</h1>
  <ul>
    {
      data.map((product, key) => <li key={key}>{ product.productName } : ฿{ product.productPrice }</li>)
    }
  </ul>
</React.Fragment>)

Hello.getInitialProps = async() => {
  const res = await fetch('http://localhost:9000/api/v2/products')
  const json = await res.json()
  return { data: json }
}

export default Hello
