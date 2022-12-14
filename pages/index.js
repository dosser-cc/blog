import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/Format'


// components
import Swiperlist from "../components/Swiperlist";
import Mainlist from '../components/Mainlist';
import Popular from "../components/Popular";
import Tail from '../components/Tail';


export default function Home() {
  return (
    <Format>
      <Swiperlist></Swiperlist>
      <Mainlist></Mainlist>
      <Popular></Popular>
      <Tail></Tail>
      
    </Format>
  );
}
