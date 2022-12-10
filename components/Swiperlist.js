import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function Swiperlist() {

  SwiperCore.use([Autoplay])
  return (
    <section className="py-16 p-2">
      <div className="container mx-auto md:px-2">
        <h1 className="font-bold text-4xl pb-12 text-center hidden md:flex mt-4 md:mt-0">
          Dosser
        </h1>
        <Swiper
        
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay:2000
          }}
          
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {


  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/images/forest.jpg"} width={680} height={350} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link
            className="text-orange-600 text-sm hover:text-orange-400"
            href={"/"}
          >
            Business Travel
          </Link>
          <Link
            className="text-gray-500 text-sm hover:text-orange-400"
            href={"/"}
          >
            - July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-2xl md:text-3xl text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            How to Make Blog Website with Next.js & Tailwind CSS - For Beginners
          </Link>
        </div>
        <p className="text-gray-500 overflow-hidden py-3">
          How to Make Blog Website with Next.js & Tailwind CSS - For Beginners
          In this course, we will understand how to make a blog website using
          Next.js and Tailwindcss. In this course, you are going to learn how to
          use next.js 
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
