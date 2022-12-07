import React from 'react'
import Head from 'next/head';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Format({ children }){
  return (
    <div>
      <Head>
        <title>Blog | Dosser</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
