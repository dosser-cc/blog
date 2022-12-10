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
    <section className="py-4 p-2">
      <div className="container mx-auto md:px-2">
      
        <Swiper
        
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay:4000
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

  const bg = {
    background: "url('/images/yf.png') no-repeat",
    backgroundPosition: "right",

  };

  return (
    <div className="grid md:grid-cols-2 gap-4" style={bg}>
      <div className="image hidden xl:flex">
        <Link href={"/"}>
          <Image src={"/images/dosser.jpg"} width={680} height={440} />
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
